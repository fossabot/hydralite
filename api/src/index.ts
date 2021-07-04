// initialize dontenv (should be at the top of the file)
import dotenv from "dotenv";
dotenv.config();

import "reflect-metadata";
import express from "express";
import cors from "cors";
import {
  fieldExtensionsEstimator,
  getComplexity,
  simpleEstimator,
} from "graphql-query-complexity";
import { PrismaClient } from "@prisma/client";
import session from "express-session";
import connectRedis from "connect-redis";
import redis from "redis";
import passport from "passport";
import { ApolloServer } from "apollo-server-express";
import { v4 as uuid } from "uuid";

import createSchema from "./util/CreateSchema";
import ContextType from "./types/Context.type";
import { isProd, projectName } from "./constants";
import { GithubOAuth } from "./auth/strategies/GithubOAuth";
import { PassportGenericUser } from "./auth/types/PassportGenericUser.type";
import UserRepo from "./db/UserRepo";
import { DiscordOAuth } from "./auth/strategies/DiscordOAuth";

async function main() {
  // initialize dontenv

  // Initialize Redis
  var redisClient = redis.createClient();
  const redisStore = connectRedis(session);

  redisClient.on("error", (err) => {
    console.log("Redis error: ", err);
  });

  // Initialize Apollo Server
  const schema = await createSchema();
  const gqlServer = new ApolloServer({
    schema,
    context: ({ req, res }: ContextType) => ({
      req,
      res,
      prisma: new PrismaClient(),
    }),
    plugins: [
      {
        requestDidStart: () => ({
          didResolveOperation({ request, document }) {
            const complexity = getComplexity({
              schema,
              operationName: request.operationName,
              query: document,
              variables: request.variables,
              estimators: [
                fieldExtensionsEstimator(),
                simpleEstimator({ defaultComplexity: 1 }),
              ],
            });

            const maximumQueryComplexity = 30;

            if (complexity > maximumQueryComplexity) {
              console.log(complexity);

              throw new Error(
                `Maximum query complexity of ${maximumQueryComplexity} has been reached.`
              );
            }
          },
        }),
      },
    ],
  });

  // Create Express Server
  const expressServer = express();

  // Express Middleware
  expressServer.use(cors({ origin: "*" }));
  expressServer.use(
    session({
      name: "_hl_sess",
      genid: (_) => uuid(),
      store: new redisStore({
        host: process.env.REDIS_HOST || "localhost",
        port: Number(process.env.REDIS_PORT) || 6379,
        client: redisClient,
      }),
      secret: process.env.sessionSecret || "hydraliteispog",
      resave: false,
      saveUninitialized: true,
      cookie: {
        httpOnly: true,
        secure: isProd,
        maxAge: 1000 * 60 * 60 * 24 * 365,
      },
    })
  );
  expressServer.use(passport.initialize());
  expressServer.use(passport.session());

  // Passport
  const userRepo = new UserRepo();

  passport.serializeUser(async (_, done) => {
    const user: PassportGenericUser = _ as any;
    const dbUser = await userRepo.findOrCreateUser(
      user.primaryOauthConnection.oauthService,
      user
    );
    done(null, dbUser.id);
  });

  passport.deserializeUser<string>(async (userId, done) => {
    try {
      const user = await userRepo.user.findUnique({
        where: {
          id: userId,
        },
        include: {
          ownedProjects: true,
          allProjects: true,
          likedProjects: true,
          followedProjects: true,
          followers: true,
          following: true,
          oauthConnections: true,
          profile: true,
          createdHashtags: true,
          createdPostComments: true,
          memberOfPostGroups: true,
          ownedPostGroups: true,
          posts: true,
          bugReports: true,
          featureRequests: true,
        },
      });
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });

  // general routes
  expressServer.get("/", function (req, res) {
    console.log("session", req.session);
    console.log("user", req.user);
    return res.json({
      message: `Welcome to ${projectName}`,
      authorized: !!req.isAuthenticated(),
    });
  });

  // auth routes
  expressServer.use("/api/auth/github", GithubOAuth(passport));
  expressServer.use("/api/auth/discord", DiscordOAuth(passport));
  expressServer.get("/api/auth/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Enable express to be used with gql
  gqlServer.applyMiddleware({ app: expressServer });

  // Start Server
  const port = process.env.PORT || 8000;
  expressServer.listen({ port }, () => {
    console.log(`Navigate to http://localhost:${port}${gqlServer.graphqlPath}`);
  });
}

main().catch((err) => console.error(err));
