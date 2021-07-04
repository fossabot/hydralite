import dotenv from "dotenv";
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
import passport from "passport";
import { ApolloServer } from "apollo-server-express";
import { v4 as uuid } from "uuid";
import connectRedis from "connect-redis";
import { createClient } from "redis";

import createSchema from "./util/CreateSchema";
import ContextType from "./types/Context.type";
import { isProd, projectName } from "./constants";
import { GithubOAuth } from "./auth/strategies/GithubOAuth";
import { PassportGenericUser } from "./auth/types/PassportGenericUser.type";
import UserRepo from "./db/UserRepo";
import { DiscordOAuth } from "./auth/strategies/DiscordOAuth";

async function main() {
  // initialize dontenv
  dotenv.config();

  // Create Express Server
  const app = express();

  // Initialize Redis
  const redisStore = connectRedis(session);
  const redisClient = createClient({
    port: Number(process.env.REDIS_PORT) || 6379,
    host: process.env.REDIS_HOST || "localhost",
    password: process.env.REDIS_PASSWORD || "",
  });

  redisClient.on("error", function (err) {
    console.error(`Error connecting to redis: ${err}`);
  });
  redisClient.on("connect", function () {
    console.log("Connected to redis.");
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

  // Express Middleware
  app.use(cors({ origin: "*" }));

  app.use(
    session({
      name: "_hl_sess",
      genid: (_) => uuid(),
      store: new redisStore({ client: redisClient }),
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
  app.use(passport.initialize());
  app.use(passport.session());

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
  app.get("/", function (req, res) {
    console.log("session", req.session);
    console.log("user", req.user);
    return res.json({
      message: `Welcome to ${projectName}`,
      authorized: !!req.isAuthenticated(),
    });
  });

  // auth routes
  app.use("/api/auth/github", GithubOAuth(passport));
  app.use("/api/auth/discord", DiscordOAuth(passport));
  app.get("/api/auth/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Enable express to be used with gql
  gqlServer.applyMiddleware({ app });

  // Start Server
  const port = process.env.PORT || 8000;
  app.listen(port, () => console.log(`Navigate to http://localhost:${port}`));
}

main().catch((err) => console.error(err));
