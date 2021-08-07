import connectRedis from "connect-redis";
import { createClient, RedisClient } from "redis";
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-express";
import { createSchema } from "./util/createSchema";
import ContextType from "./types/Context.type";
import { GraphQLSchema } from "graphql";
import express, { Application } from "express";
import cors from "cors";
import { projectName } from "./constants";
import { GithubOAuth } from "./auth/strategies/GithubOAuth";
import { DiscordOAuth } from "./auth/strategies/DiscordOAuth";
import { apolloPlugins } from "./util/apolloPlugins";
import { TwitterOAuth } from "./auth/strategies/TwitterOAuth";
import { GoogleOAuth } from "./auth/strategies/GoogleOAuth";
import fetchOauthClientInfo from "./auth/util/fetchOauthClientInfo";
import { TokenPairUtil } from "./auth/token/util/TokenPair";
import Regenerate from "./auth/token/resolvers/regenerate";
import Revoke from "./auth/token/resolvers/revoke";
import Validate from "./auth/token/resolvers/validate";

export class Server {
  public app: Application;
  public redisStore: connectRedis.RedisStore;
  public redisClient: RedisClient;
  public schema: GraphQLSchema;
  public gqlServer: ApolloServer;
  public prisma: PrismaClient;
  public tokens: TokenPairUtil;

  public constructor() {
    // set app
    this.app = express();

    // initialize redis
    this.redisInit();

    // initialize apollo server
    this.apolloInit();

    // apply express middleware
    this.applyExpressMiddleware();

    // implement general-purpose routes
    this.routes();

    // setup tokens
    this.setupTokens();

    // implement authentication routes
    this.auth();
  }

  private redisInit = () => {
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
    this.prisma = new PrismaClient();
    this.schema = await createSchema();
    const plugins = apolloPlugins(this.schema);
    this.gqlServer = new ApolloServer({
      schema: this.schema,
      context: ({ req, res }: ContextType) => ({
        req,
        res,
        prisma: this.prisma,
      }),
      plugins,
    });

    this.gqlServer.applyMiddleware({ app: this.app });
  }

  private applyExpressMiddleware() {
    // cors
    this.app.use(cors({ origin: "*" }));
  }

  private routes() {
    // welcome route
    this.app.get("/", function (req, res) {
      return res.json({
        message: `Welcome to ${projectName}`,
      });
    });
  }

  private auth() {
    // oauth strategies
    if (fetchOauthClientInfo("github").clientId)
      this.app.use("/api/auth/github", GithubOAuth);
    if (fetchOauthClientInfo("discord").clientId)
      this.app.use("/api/auth/discord", DiscordOAuth);
    if (fetchOauthClientInfo("twitter").clientId)
      this.app.use("/api/auth/twitter", TwitterOAuth);
    if (fetchOauthClientInfo("google").clientId)
      this.app.use("/api/auth/google", GoogleOAuth);
  }

  private setupTokens() {
    this.tokens = new TokenPairUtil(this.prisma);

    this.app.use("/api/token/regenerate", Regenerate(this.prisma));
    this.app.use("/api/token/revoke", Revoke(this.prisma));
    this.app.use("/api/token/validate", Validate(this.prisma));
  }

  public run() {
    const port = process.env.PORT || 8000;
    this.app.listen(port, () =>
      console.log(`Navigate to http://localhost:${port}`)
    );
  }
}
