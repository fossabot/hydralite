import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { Opportunity } from "~/resolver-types/models";
import ContextType from "~/types/Context.type";
import { FindOpportunityByIdArgs } from "./args/FindOpportunityByIdArgs";

@Resolver()
export class FindOpportunityByIdResolver {
  @Mutation(() => Opportunity)
  async findOpportunityById(
    @Arg("args") { opportunityId }: FindOpportunityByIdArgs,
    @Ctx() { prisma }: ContextType
  ): Promise<Opportunity | null> {
    return await prisma.opportunity.findUnique({
      where: { id: opportunityId },
    });
  }
}
