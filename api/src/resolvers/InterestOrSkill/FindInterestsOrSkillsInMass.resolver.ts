import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { InterestOrSkill } from "~/resolver-types/models";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { FindInterestsOrSkillsInMassArgs } from "./args/FindInterestsOrSkillsInMassArgs";

@Resolver()
export class FindInterestsOrSkillsInMassResolver {
  @Query(() => [InterestOrSkill])
  @IsAuthenticated()
  async findInterestsOrSkillsInMass(
    @Arg("args") { queryString, limit, skip }: FindInterestsOrSkillsInMassArgs,
    @Ctx() { prisma }: ContextType
  ): Promise<InterestOrSkill | null> {
    const returnedInterestsOrSkills = await executeOrFail(
      async () =>
        await prisma.$queryRaw(
          `SELECT * FROM "InterestOrSkill"
           WHERE name LIKE '%${queryString}%'
           OFFSET ${skip ?? 0}
           LIMIT ${limit && limit < 100 && limit > 0 ? limit : 20}`
        )
    );

    return returnedInterestsOrSkills;
  }
}
