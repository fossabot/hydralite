import { pathsToResolvers } from "../constants";
import { buildSchema } from "type-graphql";

export const createSchema = () =>
  buildSchema({
    resolvers: pathsToResolvers,
  });
