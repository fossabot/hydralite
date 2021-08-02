import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { FindPostCommentByIdArgs } from "./args/FindPostCommentByIdArgs";
import ContextType from "~/types/Context.type";
import { PostComment } from "~/resolver-types/models";

@Resolver()
export class FindPostCommentByIdResolver {
  @Query(() => PostComment)
  @IsAuthenticated()
  async findPostCommentById(
    @Arg("args") args: FindPostCommentByIdArgs,
    @Ctx() { prisma }: ContextType
  ) {
    return await prisma.postComment.findUnique({
      where: {
        id: args.commentId,
      },
    });
  }
}
