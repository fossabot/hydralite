import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { UpdatePostCommentArgs } from "./args/UpdatePostCommentArgs";
import ContextType from "~/types/Context.type";
import { PostComment, User } from "~/resolver-types/models";
import { ApolloError } from "apollo-server-express";

@Resolver()
export class UpdatePostCommentResolver {
  @Mutation(() => PostComment)
  @IsAuthenticated()
  async updatePostComment(
    @Arg("args") args: UpdatePostCommentArgs,
    @Ctx() { req, prisma }: ContextType
  ) {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    type postCommentType = Parameters<
      typeof prisma.postComment.create
    >[0]["data"];
    const where = {
      id: args.commentId,
    };

    const postComment: postCommentType | null =
      await prisma.postComment.findUnique({ where });
    if (postComment == null) throw new ApolloError("Comment not found");
    if (postComment.creatorId != user.id)
      throw new ApolloError("You didnt create this comment");

    await prisma.postComment.update({
      where,
      data: {
        body: args.body,
        edited: true,
      },
    });
    return postComment;
  }
}
