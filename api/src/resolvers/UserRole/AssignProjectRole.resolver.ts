import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import ContextType from "~/types/Context.type";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { User } from "@prisma/client";
import { AssignProjectRoleArgs } from "./args/AssignProjectRoleArgs";
import { ProjectMember } from "~/resolver-types/models";
import { ProjectMemberRepo } from "~/db/ProjectMemberRepo";
import { ProjectRoleRepo } from "~/db/ProjectRoleRepo";

const memberRepo = new ProjectMemberRepo();
const roleRepo = new ProjectRoleRepo();
@Resolver()
export default class AssignProjectRoleResolver {
  @Mutation(() => ProjectMember)
  @UseMiddleware(isAuthenticated)
  async assignProjectRole(
    @Arg("args") args: AssignProjectRoleArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<ProjectMember | null> {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    // validate that user that is assigning the role has perms
    const loggedInMember = await memberRepo.findMemberByUserAndProjectId(
      user.id,
      args.projectId
    );
    await memberRepo.memberHasPermission(loggedInMember!, "canManageRoles");

    // validate the member to assign the role to exists
    await memberRepo.findMemberById(args.memberId);

    // retrieve and confirm role to add exists
    const role = await roleRepo.findRoleById(args.roleId);

    // add role to member
    const memberWithUpdatedRole = await prisma.projectMember.update({
      where: { id: args.memberId },
      data: { roles: { connect: { id: role!.id } } },
      include: { overallPermissions: true },
    });

    // update members common permission after adding a new role
    const commonPerms = { ...memberWithUpdatedRole.overallPermissions };
    Object.keys(role!.permissions as object).forEach((permKey) => {
      // ignore model fields that are not permissions
      if (permKey === "id") return;

      const rolePerm: boolean = (role!.permissions as any)[permKey];
      let commonPerm: boolean = (commonPerms as any)[permKey];

      // if the role perm is set to true but the common perm is false, override the common perm
      if (rolePerm && !commonPerm) (commonPerms as any)[permKey] = true;
    });

    console.log(commonPerms);

    const memberWithUpdatedOverallPerms = await prisma.projectMember.update({
      where: { id: args.memberId },
      data: { overallPermissions: { update: { ...commonPerms } } },
    });
    return memberWithUpdatedOverallPerms;
  }
}
