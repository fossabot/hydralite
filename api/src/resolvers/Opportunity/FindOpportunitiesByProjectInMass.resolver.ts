import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Opportunity } from "~/models/index";
import ContextType from "~/types/Context.type";
import { FindOpportunitiesByProjectInMassArgs } from "./args/FindOpportunitiesByProjectInMassArgs";

@Resolver()
export class FindOpportunitiesByProjectInMassResolver {
  @Query(() => [Opportunity])
  async findOpportunitiesByProjectInMass(
    @Arg("args")
    { limit, skip, projectId }: FindOpportunitiesByProjectInMassArgs,
    @Ctx() { prisma }: ContextType
  ) {
    return await prisma.opportunity.findMany({
      skip,
      take: limit,
      where: { projectId },
    });
  }
}
