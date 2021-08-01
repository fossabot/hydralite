import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import UserRepo from "~/db/UserRepo";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { Interest, User } from "~/resolver-types/models";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { DeleteInterestArgs } from "./args/DeleteInterestArgs";

const userRepo = new UserRepo();

@Resolver()
export class DeleteInterestResolver {
  @Mutation(() => Interest)
  @IsAuthenticated()
  async deleteInterest(
    @Arg("args") { id }: DeleteInterestArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<Interest | null> {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    // ensure user has tier 1 auth
    await userRepo.userIsSiteAdmin(user.id);

    return executeOrFail(async () => {
      const deletedInterest = await prisma.interest.delete({
        where: { id },
      });
      return deletedInterest;
    });
  }
}
