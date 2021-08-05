import { Ctx, Mutation, Resolver } from "type-graphql";
import { Opportunity } from "~/resolver-types/models";
import ContextType from "~/types/Context.type";

@Resolver()
export class FindOpportunitiesInMassResolver {
  @Mutation(() => [Opportunity])
  async findOpportunitiesInMass(
    @Ctx() { prisma }: ContextType
  ): Promise<Opportunity[] | null> {
    // TASK: personalize based on users interests
    // TASK: add pagination
    return await prisma.opportunity.findMany({});
  }
}
