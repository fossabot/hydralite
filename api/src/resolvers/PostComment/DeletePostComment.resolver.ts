import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { DeletePostCommentArgs } from "./args/DeletePostCommentArgs";
import ContextType from "~/types/Context.type";
import { User } from "~/resolver-types/models";
import executeOrFail from "~/util/executeOrFail";
import { ApolloError } from "apollo-server-express";

@Resolver()
export class DeletePostCommentResolver {
  @Mutation(() => String)
  @IsAuthenticated()
  async deletePostComment(
    @Arg("args") args: DeletePostCommentArgs,
    @Ctx() { req, prisma }: ContextType
  ) {
    const user: User = req.user as User;

    type postCommentType = Parameters<typeof prisma.postComment.create>[0]["data"];
    const where = {
      id: args.commentId
    };

    const postComment: postCommentType | null = await prisma.postComment.findUnique({ where });
    if (postComment == null) throw new ApolloError("Comment not found");
    if (postComment.creatorId != user.id) throw new ApolloError("You didnt create this comment");

    executeOrFail(async () => {
        await prisma.postComment.delete({ where });
    }, 'Error deleting post');
  
    return 'Successfully deleted post';
  }
}
