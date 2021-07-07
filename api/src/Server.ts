import connectRedis from "connect-redis";
import { createClient, RedisClient } from "redis";
import session from "express-session";
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-express";
import createSchema from "./util/CreateSchema";
import ContextType from "./types/Context.type";
import { GraphQLSchema } from "graphql";
import express, { Application } from "express";
import cors from "cors";
import { v4 as uuid } from "uuid";
import { isProd, projectName } from "./constants";
import passport from "passport";
import UserRepo from "./db/UserRepo";
import { PassportGenericUser } from "./auth/types/PassportGenericUser.type";
import { GithubOAuth } from "./auth/strategies/GithubOAuth";
import { DiscordOAuth } from "./auth/strategies/DiscordOAuth";
import dotenv from "dotenv";
import { apolloPlugins } from "./util/apolloPlugins";

export class Server {
  public app: Application;
  public redisStore: connectRedis.RedisStore;
  public redisClient: RedisClient;
  public schema: GraphQLSchema;
  public gqlServer: ApolloServer;

  public constructor() {
    // initialize dontenv
    dotenv.config();

    // set app
    this.app = express();

    // initialize redis
    this.redisInit();

    // initialize apollo server
    this.apolloInit();

    // apply express middleware
    this.applyExpressMiddleware();

    // initialize passport
    this.passportInit();

    // implement general-purpose routes
    this.routes();

    // implement authentication routes
    this.auth();
  }

  private redisInit = () => {
    this.redisStore = connectRedis(session);
    this.redisClient = createClient({
      port: Number(process.env.REDIS_PORT) || 6379,
      host: process.env.REDIS_HOST || "localhost",
      password: process.env.REDIS_PASSWORD || "",
    });

    this.redisClient.on("error", function (err) {
      console.error(`Error connecting to redis: ${err}`);
    });
    this.redisClient.on("connect", function () {
      console.log("Connected to redis.");
    });
  };

  private async apolloInit() {
    this.schema = await createSchema();
    const plugins = apolloPlugins(this.schema);
    this.gqlServer = new ApolloServer({
      schema: this.schema,
      context: ({ req, res }: ContextType) => ({
        req,
        res,
        prisma: new PrismaClient(),
      }),
      plugins,
    });

    this.gqlServer.applyMiddleware({ app: this.app });
  }

  private passportInit() {
    const userRepo = new UserRepo();

    // serialize the user
    passport.serializeUser(async (_, done) => {
      const user: PassportGenericUser = _ as any;
      const dbUser = await userRepo.findOrCreateUser(
        user.primaryOauthConnection.oauthService,
        user
      );
      done(!dbUser ? "Error with authentication." : null, dbUser.id);
    });

    // deserialize the user
    passport.deserializeUser<string>(async (id, done) => done(null, { id }));
  }

  private applyExpressMiddleware() {
    // cors
    this.app.use(cors({ origin: "*" }));

    // session
    this.app.use(
      session({
        name: "_hl_sess",
        genid: (_) => uuid(),
        store: new this.redisStore({ client: this.redisClient }),
        secret: process.env.sessionSecret || "hydraliteispog",
        resave: false,
        saveUninitialized: true,
        cookie: {
          httpOnly: true,
          secure: isProd,
          sameSite: "lax",
          signed: true,
          maxAge: 1000 * 60 * 60 * 24 * 365,
        },
      })
    );

    // passport
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }

  private routes() {
    // welcome route
    this.app.get("/", function (req, res) {
      console.log("session", req.session);
      console.log("user", req.user);
      return res.json({
        message: `Welcome to ${projectName}`,
        authorized: !!req.isAuthenticated(),
      });
    });
  }

  private auth() {
    // oauth strategies
    this.app.use("/api/auth/github", GithubOAuth(passport));
    this.app.use("/api/auth/discord", DiscordOAuth(passport));

    // logout
    this.app.get("/api/auth/logout", function (req, res) {
      req.session.destroy((err) => {
        if (err) throw err;
        req.logout();
        res.redirect("/");
      });
    });
  }

  public run() {
    const port = process.env.PORT || 8000;
    this.app.listen(port, () =>
      console.log(`Navigate to http://localhost:${port}`)
    );
  }
}
