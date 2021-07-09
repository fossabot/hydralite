import { Arg, Ctx, Query, Resolver, UseMiddleware } from "type-graphql";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { Post, User } from "~/resolver-types/models";
import { FindPostByIdArgs } from "./args/FindPostByIdArgs";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { PostRepo } from "~/db/PostRepo";
import UserRepo from "~/db/UserRepo";

const postRepo = new PostRepo();
const userRepo = new UserRepo();

@Resolver()
export class FindPostByIdResolver {
  @Query(() => Post)
  @UseMiddleware(isAuthenticated)
  async findPostById(
    @Arg("args") { postId }: FindPostByIdArgs,
    @Ctx() { req }: ContextType
  ): Promise<Post | null> {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    const post = await postRepo.findPostById(postId);

    // the post isnt public
    if (post!.isPublic === false) {
      // make sure user can view post, else throw error
      await userRepo.userCanViewPrivatePost(user.id, postId);
    }

    return post;
  }
}
