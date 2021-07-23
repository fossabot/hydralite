import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { ReadAllPostCommentsArgs } from "./args/ReadAllPostCommentsArgs";
import ContextType from "~/types/Context.type";
import { PostComment } from "~/resolver-types/models";

@Resolver()
export class ReadAllPostCommentsResolver {
  @Query(() => [PostComment])
  @IsAuthenticated()
  async readAllPostComments(
    @Arg("args") args: ReadAllPostCommentsArgs,
    @Ctx() { prisma }: ContextType
  ) {
    const comments = await prisma.postComment.findMany({
      where: {
        postId: args.postId,
      },
    });

    const sortedComments = comments.sort((a, b) => b.likes - a.likes);
    return sortedComments;
  }
}
