import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { User } from "@prisma/client";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { DeleteHashtagArgs } from "./args/DeleteHashtagArgs";
import UserRepo from "~/db/UserRepo";
import { Hashtag } from "~/resolver-types/models";

const userRepo = new UserRepo();
@Resolver()
export default class DeleteHashtagResolver {
  @Mutation(() => Hashtag)
  @IsAuthenticated()
  async deleteHashtag(
    @Arg("args") args: DeleteHashtagArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<Hashtag | null> {
    // retrieve the currently logged in user
    const user: User = (req as any).user;

    // ensure user has perms
    await userRepo.userIsSiteAdmin(user.id);

    const deletedHashtag = await executeOrFail(() =>
      prisma.hashtag.delete({ where: { id: args.hashtag_id } })
    );

    return deletedHashtag;
  }
}
