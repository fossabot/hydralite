import { MiddlewareFn } from "type-graphql";
import ContextType from "~/types/Context.type";

export const isAuthenticated: MiddlewareFn<ContextType> = async (
  { context: { req } },
  next
) => {
  if (!req.isAuthenticated()) throw new Error("Not Authenticated.");
  return next();
};
