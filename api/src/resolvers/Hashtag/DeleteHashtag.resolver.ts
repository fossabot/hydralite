import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { User } from "@prisma/client";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { DeleteHashtagArgs } from "./args/DeleteHashtagArgs";

@Resolver()
export default class DeleteHashtagResolver {
  @Mutation(() => Boolean)
  @UseMiddleware(isAuthenticated)
  async deleteHashtag(
    @Arg("args") args: DeleteHashtagArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<boolean> {
    // retrieve the currently logged in user
    const user: User = (req as any).user;

    return executeOrFail(async () => {
      const hashtag = await prisma.hashtag.findFirst({
        where: {
          id: args.hashtag_id,
          creatorId: user.id,
        },
      });
      try {
        if (!hashtag) return false;
        await prisma.hashtag.delete({
          where: {
            id: hashtag.id,
          },
        });

        return true;
      } catch (err) {
        return false;
      }
    });
  }
}
