import { Arg, Ctx, Query, Resolver, UseMiddleware } from "type-graphql";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { Hashtag } from "src/typegql-generated";
import { FindHashtagByNameArgs } from "./args/FindHashtagByNameArgs";

@Resolver()
export default class FindHashtagByNameResolver {
  @Query(() => Hashtag, { nullable: true })
  @UseMiddleware(isAuthenticated)
  async findHashtagByName(
    @Arg("args") args: FindHashtagByNameArgs,
    @Ctx() { prisma }: ContextType
  ): Promise<Hashtag | null> {
    return executeOrFail(async () => {
      const hashtag = await prisma.$queryRaw(
        `
			select * from "Hashtag" as h where h.name = $1
			`,
        args.name
      );

      return hashtag[0] ?? null;
    });
  }
}
