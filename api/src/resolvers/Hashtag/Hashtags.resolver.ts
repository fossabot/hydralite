import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { Hashtag } from "~/resolver-types/models/Hashtag";

@Resolver()
export default class HashtagsResolver {
  @Mutation(() => [Hashtag])
  @IsAuthenticated()
  async hashtags(@Ctx() { prisma }: ContextType): Promise<Hashtag[]> {
    return executeOrFail(async () => {
      const hashtags = await prisma.hashtag.findMany({});

      return hashtags;
    });
  }
}
