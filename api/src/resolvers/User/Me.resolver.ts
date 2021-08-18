import { Ctx, Query, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { User } from "~/models/index";
import ContextType from "~/types/Context.type";

@Resolver()
export default class MeResolver {
  @IsAuthenticated()
  @Query(() => User)
  me(@Ctx() { req }: ContextType) {
    const user: User = req.user as any;
    return user;
  }
}
