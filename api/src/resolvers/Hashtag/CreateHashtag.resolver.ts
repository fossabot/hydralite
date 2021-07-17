import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { User } from "@prisma/client";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { Hashtag } from "~/resolver-types/models/Hashtag";
import { CreateHashtagArgs } from "./args/CreateHashtagArgs";

@Resolver()
export default class CreateHashtagResolver {
  @Mutation(() => Hashtag)
  @IsAuthenticated()
  async createHashtag(
    @Arg("args") args: CreateHashtagArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<Hashtag> {
    // retrieve the currently logged in user
    const user: User = (req as any).user;

    return executeOrFail(async () => {
      const hashtag = await prisma.hashtag.create({
        data: {
          name: args.name,
          creator: { connect: { id: user.id } },
          numOfPosts: 0,
        },
      });

      return hashtag;
    });
  }
}
