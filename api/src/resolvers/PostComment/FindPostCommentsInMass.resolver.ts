import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { FindPostCommentsInMassArgs } from "./args/FindPostCommentsInMassArgs";
import ContextType from "~/types/Context.type";
import { PostComment } from "~/resolver-types/models";

@Resolver()
export class FindPostCommentsInMassResolver {
  @Query(() => [PostComment])
  @IsAuthenticated()
  async findPostCommentsInMass(
    @Arg("args") args: FindPostCommentsInMassArgs,
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
