import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Opportunity } from "~/models/index";
import ContextType from "~/types/Context.type";
import { FindOpportunitiesInMassArgs } from "./args/FindOpportunitiesInMassArgs";

@Resolver()
export class FindOpportunitiesInMassResolver {
  @Query(() => [Opportunity])
  async findOpportunitiesInMass(
    @Arg("args") { limit, skip }: FindOpportunitiesInMassArgs,
    @Ctx() { prisma }: ContextType
  ): Promise<Opportunity[] | null> {
    // TASK: personalize based on users interests
    return await prisma.opportunity.findMany({
      skip,
      take: limit,
    });
  }
}
