import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { PostComment, User } from "~/resolver-types/models";
import ContextType from "~/types/Context.type";
import { LikeUnlikePostCommentArgs } from "./args/LikeUnlikePostCommentArgs";

@Resolver()
export class LikeUnlikePostCommentResolver {
  @Mutation(() => PostComment)
  @IsAuthenticated()
  async likePostComment(
    @Arg("args") { commentId }: LikeUnlikePostCommentArgs,
    @Ctx() { req, prisma }: ContextType
  ) {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    const likedPostComment = await prisma.postComment.update({
      where: { id: commentId },
      data: { likers: { connect: [{ id: user.id }] } },
      include: {
        likers: true,
      },
    });

    return await prisma.postComment.update({
      where: { id: likedPostComment.id },
      data: { likes: likedPostComment.likers.length },
    });
  }

  @Mutation(() => PostComment)
  @IsAuthenticated()
  async unlikePostComment(
    @Arg("args") { commentId }: LikeUnlikePostCommentArgs,
    @Ctx() { req, prisma }: ContextType
  ) {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    const unlikedPostComment = await prisma.postComment.update({
      where: { id: commentId },
      data: { likers: { disconnect: { id: user.id } } },
      include: {
        likers: true,
      },
    });

    return await prisma.postComment.update({
      where: { id: unlikedPostComment.id },
      data: { likes: unlikedPostComment.likers.length },
    });
  }
}
