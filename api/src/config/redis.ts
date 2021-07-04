import Redis from "ioredis";
import connectRedis from "connect-redis";
import session from "express-session";

export const redisStore = connectRedis(session);
export const redis = new Redis({
  port: Number(process.env.REDIS_PORT) || 6379,
  host: process.env.REDIS_HOST || "localhost",
  password: process.env.REDIS_PASSWORD || "",
  db: 0,
});
