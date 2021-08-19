import { User } from "@prisma/client";
import { ApolloError } from "apollo-server-express";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { ProjectMemberRepo } from "~/db/ProjectMemberRepo";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { Opportunity } from "~/models/index";
import ContextType from "~/types/Context.type";
import { connectIdArray } from "~/util/connectIdArray";
import executeOrFail from "~/util/executeOrFail";
import { UpdateOpportunityArgs } from "./args/UpdateOpportunityArgs";

const memberRepo = new ProjectMemberRepo();
@Resolver()
export class UpdateOpportunityResolver {
  @Mutation(() => Opportunity)
  @IsAuthenticated()
  async updateOpportunity(
    @Arg("args") args: UpdateOpportunityArgs,
    @Ctx() { prisma, req }: ContextType
  ): Promise<Opportunity | null> {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    /* validation */

    // find the opportunity to update
    const opportunity = await prisma.opportunity.findUnique({
      where: { id: args.opportunityId },
    });
    if (!opportunity) throw new ApolloError("Could not find opportunity");

    // ensure this user exists in the project of the opportunity
    const loggedInMember = await memberRepo.findMemberByUserAndProjectId(
      user.id,
      opportunity.projectId
    );

    // ensure this user has perms in the project
    memberRepo.memberHasPermission(
      loggedInMember!,
      "canManageContributorOutsourcing"
    );

    type opportunityType = Parameters<
      typeof prisma.opportunity.update
    >[0]["data"];
    const opportunityData: opportunityType = {
      title: args.title,
      description: args.description,
      isPaid: !!args.isPaid,
      requiredSkills: connectIdArray(args.requiredSkillIds),
      paymentAmount: null, // TASK: change once payment stuff is figured out
      requiredCapacity: null,
      timeFrequency: null,
    };

    // conditionally set null fields
    if (args.isPaid) {
      opportunityData.timeFrequency = args.timeFrequency;
      opportunityData.requiredCapacity = args.requiredCapacity;
      // TASK: add payment amount once payment stuff is figured out
    }

    const updatedOpportunity = await executeOrFail(
      async () =>
        await prisma.opportunity.update({
          where: { id: opportunity.id },
          data: opportunityData,
        })
    );

    return updatedOpportunity;
  }
}
