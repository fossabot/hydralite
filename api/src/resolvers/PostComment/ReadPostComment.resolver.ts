import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { ReadPostCommentArgs } from "./args/ReadPostCommentArgs";
import ContextType from "~/types/Context.type";
import { PostComment } from "~/resolver-types/models";

@Resolver()
export class ReadPostCommentResolver {
  @Query(() => PostComment)
  @IsAuthenticated()
  async readPostComment(
    @Arg("args") args: ReadPostCommentArgs,
    @Ctx() { req, prisma }: ContextType
  ) {
    return await prisma.postComment.findUnique({
      where: {
        id: args.commentId
      }
    });
  }
}
