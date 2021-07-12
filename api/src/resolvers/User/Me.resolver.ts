import { Ctx, Query, Resolver, UseMiddleware } from "type-graphql";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { User } from "~/resolver-types/models";
import ContextType from "~/types/Context.type";

@Resolver()
export default class MeResolver {
  @UseMiddleware(isAuthenticated)
  @Query(() => User)
  me(@Ctx() { req }: ContextType) {
    const user: User = req.user as any;
    return user;
  }
}
