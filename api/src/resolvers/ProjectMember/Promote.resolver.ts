import { ApolloError } from "apollo-server-express";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { ProjectMemberRepo } from "~/db/ProjectMemberRepo";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { ProjectMember, User } from "~/resolver-types/models";
import ContextType from "~/types/Context.type";
import { PromoteArgs } from "./args/PromoteArgs";

const memberRepo = new ProjectMemberRepo();

@Resolver()
export class Promote {
  @IsAuthenticated()
  @Mutation(() => ProjectMember)
  async promote(
    @Ctx() { req: { user: _ }, prisma }: ContextType,
    @Arg("args") { projectId, memberId, newRole }: PromoteArgs
  ): Promise<ProjectMember> {
    const user: User = _ as any;
    // validate project existence
    const projectToJoin = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!projectToJoin) throw new ApolloError("Invalid project.", "invalid_id");

    // validate that the promoter (person giving promotion) is actually in the project, has the valid permissions

    const promoter = await memberRepo.findMemberByUserAndProjectId(
      user.id,
      projectId
    );

    memberRepo.memberHasPermission(promoter!, "canManageUsers");

    // check if the recipient is in the project
    const member = await memberRepo.findMemberById(memberId);

    if (!member || member.projectId !== projectId)
      throw new ApolloError("Invalid project member.", "invalid_id");

    // finally, update the member with the new role
    return prisma.projectMember.update({
      where: { id: member.id },
      data: {
        type: newRole,
      },
    });
  }
}
