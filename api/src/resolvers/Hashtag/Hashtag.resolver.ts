import { Arg, Ctx, Query, Resolver, UseMiddleware } from "type-graphql";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { Hashtag } from "src/typegql-generated";
import { HashtagArgs } from "./args/HashtagArgs";

@Resolver()
export default class HashtagResolver {
  @Query(() => Hashtag, { nullable: true })
  @UseMiddleware(isAuthenticated)
  async hashtag(
    @Arg("args") args: HashtagArgs,
    @Ctx() { prisma }: ContextType
  ): Promise<Hashtag | null> {
    return executeOrFail(async () => {
      let hashtag;

      if (args.id) {
        // the user has given the hashtag's id to search with
        hashtag = await prisma.hashtag.findUnique({
          where: {
            id: args.id,
          },
        });
      } else if (args.name) {
        // the user has given the hashtag's name to search with
        hashtag = await prisma.hashtag.findFirst({
          where: {
            name: args.name,
          },
        });
      } else {
        return null;
      }

      return hashtag;
    });
  }
}
