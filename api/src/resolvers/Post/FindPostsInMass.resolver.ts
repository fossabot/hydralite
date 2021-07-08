import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { Post, User } from "~/resolver-types/models";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { FindPostsInMassArgs } from "./args/FindPostsInMassArgs";

@Resolver()
export class FindPostsInMass {
  @Mutation(() => [Post])
  @UseMiddleware(isAuthenticated)
  async findPostsInMass(
    @Ctx() { req, prisma }: ContextType,
    @Arg("args") args: FindPostsInMassArgs
  ): Promise<Post[] | null> {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    type postQueryType = Parameters<typeof prisma.post.findMany>[0];
    const postQuery: postQueryType = {
      skip: args.skip,
      take: args.limit,
      where: {
        OR: [
          {
            isPublic: false,
            visibleTo: { some: { id: user.id } },
          },
          {
            isPublic: true,
            visibleTo: { every: {} },
          },
        ],
      },
    };

    if (args.projectId) postQuery.where!.projectId = args.projectId;

    return executeOrFail(async () => await prisma.post.findMany(postQuery));
  }
}
