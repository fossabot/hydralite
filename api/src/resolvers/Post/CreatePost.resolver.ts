import { Arg, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { CreatePostArgs } from "./args/CreatePostArgs";

@Resolver()
class CreatePostResolver {
  @UseMiddleware(isAuthenticated)
  @Mutation()
  async createPost(@Arg("args") args: CreatePostArgs) {}
}
