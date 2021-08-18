import { User } from "@prisma/client";
import { ApolloError } from "apollo-server-express";
import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { ProjectMemberRepo } from "~/db/ProjectMemberRepo";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { OpportunityApplicant } from "~/models/index";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { FetchOpportunityApplicantsInMassArgs } from "./args/FetchOpportunityApplicantsInMassArgs";

const memberRepo = new ProjectMemberRepo();

@Resolver()
export class FetchOpportunityApplicantsInMass {
  @Query(() => [OpportunityApplicant])
  @IsAuthenticated()
  async fetchOpportunityApplicantsInMass(
    @Arg("args")
    { opportunityId, limit, skip }: FetchOpportunityApplicantsInMassArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<OpportunityApplicant[] | null> {
    const user: User = req.user as User;

    // find the opportunity by id
    const opportunity = await prisma.opportunity.findUnique({
      where: { id: opportunityId },
    });
    if (!opportunity)
      throw new ApolloError("Invalid opportunity id", "invalid_id");

    // find the member based on projectId (retrieved from opportunity) that corresponds to the logged in user
    const loggedInMember = await memberRepo.findMemberByUserAndProjectId(
      user.id,
      opportunity.projectId
    );

    // ensure member has perms to fetch opportunity applicants
    await memberRepo.memberHasPermission(
      loggedInMember!,
      "canManageContributorOutsourcing"
    );

    const applicants = executeOrFail(
      async () =>
        await prisma.opportunityApplicant.findMany({
          skip,
          take: limit,
          where: { opportunityId },
        })
    );

    return applicants;
  }
}
