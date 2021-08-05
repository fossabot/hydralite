import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { InterestOrSkill, User } from "~/resolver-types/models";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { CreateInterestOrSkillArgs } from "./args/CreateInterestOrSkillArgs";

@Resolver()
export class CreateInterestOrSkillResolver {
  @Mutation(() => InterestOrSkill)
  @IsAuthenticated()
  createInterestOrSkill(
    @Arg("args") { name }: CreateInterestOrSkillArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<InterestOrSkill | null> {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    return executeOrFail(async () => {
      const createdInterestOrSkill = await prisma.interestOrSkill.create({
        data: {
          name,
          creator: { connect: { id: user.id } },
          uses: 0,
        },
      });
      return createdInterestOrSkill;
    });
  }
}
