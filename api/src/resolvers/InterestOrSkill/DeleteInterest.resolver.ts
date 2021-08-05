import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import UserRepo from "~/db/UserRepo";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { InterestOrSkill, User } from "~/resolver-types/models";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { DeleteInterestOrSkillArgs } from "./args/DeleteInterestOrSkillArgs";

const userRepo = new UserRepo();

@Resolver()
export class DeleteInterestOrSkillResolver {
  @Mutation(() => InterestOrSkill)
  @IsAuthenticated()
  async deleteInterestOrSkill(
    @Arg("args") { id }: DeleteInterestOrSkillArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<InterestOrSkill | null> {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    // ensure user has tier 1 auth
    await userRepo.userIsSiteAdmin(user.id);

    return executeOrFail(async () => {
      const deletedInterestOrSkill = await prisma.interestOrSkill.delete({
        where: { id },
      });
      return deletedInterestOrSkill;
    });
  }
}
