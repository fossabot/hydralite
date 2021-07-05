import { ApolloError } from "apollo-server-express";

export default async function executeOrFail<T>(
  cb: () => T | Promise<T>,
  message: string = "Internal Server Error",
  code: string = ""
) {
  try {
    return await cb();
  } catch (err) {
    console.error(err);
    throw new ApolloError(message, code);
  }
}
