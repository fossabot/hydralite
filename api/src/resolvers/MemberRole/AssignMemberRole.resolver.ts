import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import ContextType from "~/types/Context.type";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { User } from "@prisma/client";
import { AssignMemberRoleArgs } from "./args/AssignMemberRoleArgs";
import { ProjectMember } from "~/resolver-types/models";
import { ProjectMemberRepo } from "~/db/ProjectMemberRepo";
import { MemberRoleRepo } from "~/db/MemberRoleRepo";
import executeOrFail from "~/util/executeOrFail";

const memberRepo = new ProjectMemberRepo();
const roleRepo = new MemberRoleRepo();
@Resolver()
export default class AssignMemberRoleResolver {
  @Mutation(() => ProjectMember)
  @IsAuthenticated()
  async assignMemberRole(
    @Arg("args") args: AssignMemberRoleArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<ProjectMember | null> {
    return executeOrFail(async () => {
      // retrieve the currently logged in user
      const user: User = req.user as User;

      /* 
        Validation Workflow To Confirm The User's Permissions:
          - We find the role to assign using the id provided in args
          - We find a project member that corresponds to the logged in user id as well as the project id extracted from the role found
      */

      // retrieve and confirm role to add exists
      const role = await roleRepo.findRoleById(args.roleId);

      // validate that user that is assigning the role has perms
      const loggedInMember = await memberRepo.findMemberByUserAndProjectId(
        user.id,
        role!.projectId
      );
      await memberRepo.memberHasPermission(loggedInMember!, "canManageRoles");

      /* Assigning the Role */

      // validate the member to assign the role to exists
      await memberRepo.findMemberById(args.memberId);

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

      // update the member with their new overall permissions
      const memberWithUpdatedOverallPerms = await prisma.projectMember.update({
        where: { id: args.memberId },
        data: { overallPermissions: { update: { ...commonPerms } } },
      });

      return memberWithUpdatedOverallPerms;
    }, "Error assigning role.");
  }
}
