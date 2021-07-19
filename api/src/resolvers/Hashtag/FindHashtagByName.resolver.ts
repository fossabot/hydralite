import { Arg, Ctx, Query, Resolver } from "type-graphql";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { Hashtag } from "~/resolver-types/models/Hashtag";
import { FindHashtagByNameArgs } from "./args/FindHashtagByNameArgs";

@Resolver()
export default class FindHashtagByNameResolver {
  @Query(() => Hashtag, { nullable: true })
  @IsAuthenticated()
  async findHashtagByName(
    @Arg("args") args: FindHashtagByNameArgs,
    @Ctx() { prisma }: ContextType
  ): Promise<Hashtag | null> {
    return executeOrFail(async () => {
      const hashtag = await prisma.$queryRaw(
        `
				SELECT h.* FROM "Hashtag" as h WHERE to_tsvector(h.name) @@ to_tsquery($1);
			`,
        args.name
      );

      return hashtag[0] ?? null;
    });
  }
}
