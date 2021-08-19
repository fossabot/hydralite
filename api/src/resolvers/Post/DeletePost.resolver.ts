import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import ContextType from "~/types/Context.type";
import { User } from "~/models/index";
import { DeletePostArgs } from "./args/DeletePostArgs";
import { PostRepo } from "~/db/PostRepo";
import executeOrFail from "~/util/executeOrFail";

const postRepo = new PostRepo();
@Resolver()
export class DeletePostResolver {
  @IsAuthenticated()
  @Mutation(() => String)
  async deletePost(
    @Arg("args") args: DeletePostArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<String | null> {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    // ensure the user trying to delete the post was the creator
    await postRepo.userIsCreatorOfPost(user.id, args.postId);

    // delete the post
    executeOrFail(async () => {
      await prisma.post.delete({
        where: { id: args.postId },
      });
    }, "Error deleting post");

    return "Successfully deleted post";
  }
}
