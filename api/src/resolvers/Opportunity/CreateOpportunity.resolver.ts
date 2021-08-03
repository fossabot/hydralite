import { User } from "@prisma/client";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { ProjectMemberRepo } from "~/db/ProjectMemberRepo";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import ContextType from "~/types/Context.type";
import { connectIdArray } from "~/util/connectIdArray";
import executeOrFail from "~/util/executeOrFail";
import { CreateOpportunityArgs } from "./args/CreateOpportunityArgs";

const memberRepo = new ProjectMemberRepo();
@Resolver()
export class CreateOpportunityResolver {
  @Mutation()
  @IsAuthenticated()
  async createOpportunity(
    @Arg("args") args: CreateOpportunityArgs,
    @Ctx() { prisma, req }: ContextType
  ) {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    /* validation */
    // ensure this user exists in specified project
    const loggedInMember = await memberRepo.findMemberByUserAndProjectId(
      user.id,
      args.projectId
    );

    // ensure this user has perms in the specified project
    // memberRepo.memberHasPermission(loggedInMember!, "") // TASK: re add this after refining permission stuff

    type opportunityType = Parameters<
      typeof prisma.opportunity.create
    >[0]["data"];
    const opportunity: opportunityType = {
      title: args.title,
      description: args.description,
      isPaid: !!args.isPaid,
      project: { connect: { id: args.projectId } },
      requiredSkills: connectIdArray(args.requiredSkillIds),
      paymentAmount: null, // TASK: change once payment stuff is figured out
      requiredCapacity: null,
      timeFrequency: null,
    };

    // conditionally set null fields
    if (args.isPaid) {
      opportunity.timeFrequency = args.timeFrequency;
      opportunity.requiredCapacity = args.requiredCapacity;
      // TASK: add payment amount once payment stuff is figured out
    }

    const createdOpportunity = await executeOrFail(
      async () => await prisma.opportunity.create({ data: opportunity })
    );

    return createdOpportunity;
  }
}
