import { ApolloError } from "apollo-server-express";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { ProjectMemberRepo } from "~/db/ProjectMemberRepo";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { ProjectMember, User } from "~/resolver-types/models";
import ContextType from "~/types/Context.type";
import { PromoteArgs } from "./args/PromoteArgs";

const memberRepo = new ProjectMemberRepo();

@Resolver()
export class PromoteProjectMember {
  @IsAuthenticated()
  @Mutation(() => ProjectMember)
  async promoteProjectMember(
    @Ctx() { req: { user: _ }, prisma }: ContextType,
    @Arg("args") { memberId, newRole }: PromoteArgs
  ): Promise<ProjectMember> {
    const user: User = _ as any;

    const memberToPromote = (await prisma.projectMember.findUnique({
      where: { id: memberId },
    })) as ProjectMember;

    const promoter = (await prisma.projectMember.findFirst({
      where: { userId: user.id, projectId: memberToPromote!.projectId },
    })) as ProjectMember;

    memberRepo.memberHasPermission(promoter, "canManageUsers");

    // finally, update the member with the new role
    return prisma.projectMember.update({
      where: { id: memberToPromote.id },
      data: {
        type: newRole,
      },
    });
  }
}
