import { Arg, Ctx, Query, Resolver, UseMiddleware } from "type-graphql";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { Hashtag } from "src/typegql-generated";
import { FindHashtagByIdArgs } from "./args/FindHashtagByIdArgs";

@Resolver()
export default class FindHashtagByIdResolver {
  @Query(() => Hashtag, { nullable: true })
  @UseMiddleware(isAuthenticated)
  async findHashtagById(
    @Arg("args") args: FindHashtagByIdArgs,
    @Ctx() { prisma }: ContextType
  ): Promise<Hashtag | null> {
    return executeOrFail(async () => {
      const hashtag = await prisma.hashtag.findUnique({
        where: {
          id: args.id,
        },
      });

      return hashtag ?? null;
    });
  }
}
