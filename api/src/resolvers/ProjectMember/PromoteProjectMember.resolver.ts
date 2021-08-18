import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { ProjectMemberRepo } from "~/db/ProjectMemberRepo";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { ProjectMember, User } from "~/models/index";
import ContextType from "~/types/Context.type";
import { PromoteProjectMemberArgs } from "./args/PromoteProjectMemberArgs";

const memberRepo = new ProjectMemberRepo();

@Resolver()
export class PromoteProjectMember {
  @IsAuthenticated()
  @Mutation(() => ProjectMember)
  async promoteProjectMember(
    @Ctx() { req, prisma }: ContextType,
    @Arg("args") { memberId, newRole }: PromoteProjectMemberArgs
  ): Promise<ProjectMember> {
    const user: User = req.user as User;

    const memberToPromote = (await prisma.projectMember.findUnique({
      where: { id: memberId },
    })) as ProjectMember;

    const loggedInMember = (await memberRepo.findMemberByUserAndProjectId(
      user.id,
      memberToPromote.projectId
    )) as ProjectMember;

    memberRepo.memberHasPermission(loggedInMember, "canManageMembers");

    // finally, update the member with the new role
    return prisma.projectMember.update({
      where: { id: memberToPromote.id },
      data: { type: newRole },
    });
  }
}
