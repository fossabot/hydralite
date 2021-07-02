import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import ContextType from "~/types/Context.type";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { User } from "@prisma/client";
import { memberHasManageRolesPermisson } from "./validators/memberHasManageRolesPermisson.validator";
import { doesRoleExist } from "./validators/doesRoleExist";
import { AssignProjectRoleArgs } from "./args/AssignProjectRoleArgs";
import { ProjectMember } from "~/resolver-types/models";

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

    // validators
    await memberHasManageRolesPermisson(user.id, args.projectId);
    const role = await doesRoleExist(args.roleId);

    // add role to member
    const memberWithUpdatedRole = await prisma.projectMember.update({
      where: { id: args.memberId },
      data: { roles: { connect: { id: args.roleId } } },
      include: { overallPermissions: true },
    });

    // update members common permission after adding a new role
    const commonPerms = { ...memberWithUpdatedRole.overallPermissions };
    Object.keys(role.permissions).forEach((permKey) => {
      // ignore model fields that are not permission
      if (permKey === "id") return;

      const rolePerm: boolean = (role.permissions as any)[permKey];
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
