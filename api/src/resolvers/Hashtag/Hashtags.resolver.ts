import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { Hashtag } from "src/resolver-types/models/Hashtag";

@Resolver()
export default class HashtagsResolver {
  @Mutation(() => [Hashtag])
  @UseMiddleware(isAuthenticated)
  async hashtags(@Ctx() { prisma }: ContextType): Promise<Hashtag[]> {
    return executeOrFail(async () => {
      const hashtags = await prisma.hashtag.findMany({});

      return hashtags;
    });
  }
}
