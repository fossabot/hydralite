import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import ContextType from "~/types/Context.type";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { CreateMemberRoleArgs } from "./args/CreateMemberRoleArgs";
import { MemberRole, User } from "~/resolver-types/models";
import { ProjectMemberRepo } from "~/db/ProjectMemberRepo";

const memberRepo = new ProjectMemberRepo();
@Resolver()
export default class CreateMemberRoleResolver {
  @Mutation(() => MemberRole)
  @IsAuthenticated()
  async createMemberRole(
    @Arg("args") { projectId, title, description, perms }: CreateMemberRoleArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<MemberRole | null> {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    // retrieve and confirm loggedInMember exists
    const loggedInMember = await memberRepo.findMemberByUserAndProjectId(
      user.id,
      projectId
    );

    // ensure loggedInMember has required permissions
    await memberRepo.memberHasPermission(loggedInMember!, "canManageRoles");

    const createdRole = await prisma.memberRole.create({
      data: {
        title: title,
        description: description || "",
        permissions: {
          create: {
            canCreateUserReviews: perms?.includes("canCreateUserReviews"),
            canManageBugReports: perms?.includes("canManageBugReports"),
            canManageFeatureRequests: perms?.includes(
              "canManageFeatureRequests"
            ),
            canManageFundraisers: perms?.includes("canManageFundraisers"),
            canManageWaitlists: perms?.includes("canManageWaitlists"),
            canManageMembers: perms?.includes("canManageMembers"),
            canManagePosts: perms?.includes("canManagePosts"),
            canManageRoles: perms?.includes("canManageRoles"),
          },
        },
        project: {
          connect: { id: projectId },
        },
        assignedMembers: {}, // TASK: Allow the ability to specify member id's that can get this role
      },
    });

    return createdRole;
  }
}
