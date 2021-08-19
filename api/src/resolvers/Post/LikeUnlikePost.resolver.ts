import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { Post, User } from "~/models/index";
import ContextType from "~/types/Context.type";
import { LikeUnlikePostArgs } from "./args/LikeUnlikePostArgs";

@Resolver()
export class LikeUnlikePostResolver {
  @Mutation(() => Post)
  @IsAuthenticated()
  async likePost(
    @Arg("args") { postId }: LikeUnlikePostArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<Post | null> {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    const likedPost = prisma.post.update({
      where: { id: postId },
      data: { likers: { connect: [{ id: user.id }] } },
    });

    return likedPost;
  }

  @Mutation(() => Post)
  @IsAuthenticated()
  async unlikePost(
    @Arg("args") { postId }: LikeUnlikePostArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<Post | null> {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    const unlikedPost = prisma.post.update({
      where: { id: postId },
      data: { likers: { disconnect: { id: user.id } } },
    });

    return unlikedPost;
  }
}
