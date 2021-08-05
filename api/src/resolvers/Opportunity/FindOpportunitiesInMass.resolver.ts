import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { Opportunity } from "~/resolver-types/models";
import ContextType from "~/types/Context.type";
import { FindOpportunitiesInMassArgs } from "./args/FindOpportunitiesInMassArgs";

@Resolver()
export class FindOpportunitiesInMassResolver {
  @Mutation(() => [Opportunity])
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
