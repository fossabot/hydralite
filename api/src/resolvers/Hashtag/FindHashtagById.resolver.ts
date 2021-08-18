import { Arg, Ctx, Query, Resolver } from "type-graphql";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { Hashtag } from "~/models/Hashtag";
import { FindHashtagByIdArgs } from "./args/FindHashtagByIdArgs";

@Resolver()
export default class FindHashtagByIdResolver {
  @Query(() => Hashtag, { nullable: true })
  @IsAuthenticated()
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
