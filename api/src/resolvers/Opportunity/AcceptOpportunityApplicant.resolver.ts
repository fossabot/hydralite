import { OpportunityApplicant, User } from "~/resolver-types/models";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import ContextType from "~/types/Context.type";
import { AcceptOpportunityApplicantArgs } from "./args/AcceptOpportunityApplicantArgs";
import { ProjectMemberRepo } from "~/db/ProjectMemberRepo";
import { ApolloError } from "apollo-server-express";
import executeOrFail from "~/util/executeOrFail";

const memberRepo = new ProjectMemberRepo();

@Resolver()
export class AcceptOpportunityApplicantResolver {
  @Mutation(() => OpportunityApplicant)
  @IsAuthenticated()
  async acceptOpportunityApplicant(
    @Arg("args") { applicantId }: AcceptOpportunityApplicantArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<OpportunityApplicant | null> {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    /* validation */

    // find the applicant by its id
    const applicant = await prisma.opportunityApplicant.findUnique({
      where: { id: applicantId },
      include: { opportunity: true },
    });
    if (!applicant)
      throw new ApolloError("Invalid Applicant Id.", "invalid_id");

    // ensure this user exists in specified project
    const loggedInMember = await memberRepo.findMemberByUserAndProjectId(
      user.id,
      applicant.opportunity.projectId
    );

    // ensure this user has perms in the specified project
    memberRepo.memberHasPermission(
      loggedInMember!,
      "canManageContributorOutsourcing"
    );

    const updatedApplicant = executeOrFail(
      async () =>
        await prisma.opportunityApplicant.update({
          where: { id: applicantId },
          data: { isAccepted: true },
        })
    );

    // TASK: Email applicant saying they got accepted and send them a notification too

    return updatedApplicant;
  }
}
