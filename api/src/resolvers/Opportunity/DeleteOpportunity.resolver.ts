import { User } from "@prisma/client";
import { ApolloError } from "apollo-server-express";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { ProjectMemberRepo } from "~/db/ProjectMemberRepo";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { Opportunity } from "~/models/index";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { DeleteOpportunityArgs } from "./args/DeleteOpportunityArgs";

const memberRepo = new ProjectMemberRepo();

@Resolver()
export class DeleteOpportunityResolver {
  @Mutation(() => Opportunity)
  @IsAuthenticated()
  async deleteOpportunity(
    @Arg("args") { opportunityId }: DeleteOpportunityArgs,
    @Ctx() { req, prisma }: ContextType
  ) {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    /* validation */

    // find the opportunity to delete
    const opportunity = await prisma.opportunity.findUnique({
      where: { id: opportunityId },
    });
    if (!opportunity) throw new ApolloError("Could not find opportunity");

    // ensure this user exists in the project of the opportunity
    const loggedInMember = await memberRepo.findMemberByUserAndProjectId(
      user.id,
      opportunity.projectId
    );

    // ensure this user has required perms in the project
    memberRepo.memberHasPermission(
      loggedInMember!,
      "canManageContributorOutsourcing"
    );

    const deletedOpportunity = await executeOrFail(
      async () =>
        await prisma.opportunity.delete({
          where: { id: opportunityId },
        })
    );

    return deletedOpportunity;
  }
}
