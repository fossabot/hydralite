import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Opportunity } from "~/models/index";
import ContextType from "~/types/Context.type";
import { FindOpportunityByIdArgs } from "./args/FindOpportunityByIdArgs";

@Resolver()
export class FindOpportunityByIdResolver {
  @Query(() => Opportunity)
  async findOpportunityById(
    @Arg("args") { opportunityId }: FindOpportunityByIdArgs,
    @Ctx() { prisma }: ContextType
  ): Promise<Opportunity | null> {
    return await prisma.opportunity.findUnique({
      where: { id: opportunityId },
    });
  }
}
