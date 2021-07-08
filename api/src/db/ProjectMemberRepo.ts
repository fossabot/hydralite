import { PrismaClient } from "@prisma/client";
import { ApolloError } from "apollo-server-express";
import { ProjectMember } from "~/resolver-types/models";

export class ProjectMemberRepo extends PrismaClient {
  findMemberById = async (
    memberId: string,
    validate: boolean = true
  ): Promise<ProjectMember | null> => {
    // retrieve member
    const member = this.projectMember.findUnique({ where: { id: memberId } });

    // validation
    if (validate && !member)
      throw new ApolloError("Invalid member Id", "invalid_id");

    return member;
  };

  findMemberByUserAndProjectId = async (
    userId: string,
    projectId: string,
    validate: boolean = true
  ): Promise<ProjectMember | null> => {
    // retrieve member
    const member = await this.projectMember.findFirst({
      where: { userId, projectId },
      include: { overallPermissions: true, roles: true },
    });

    // validation
    if (validate && !member)
      throw new ApolloError("Invalid user or project id", "invalid_id");

    return member;
  };

  memberHasPermission = (
    member: ProjectMember,
    permissionName: string,
    validate: boolean = true
  ): boolean => {
    const doesMemberHavePermission = !!(member.overallPermissions as any)[
      permissionName
    ];

    if (validate && !doesMemberHavePermission)
      throw new ApolloError(
        "This action requires elevation.",
        "perms_not_sufficient"
      );

    return doesMemberHavePermission;
  };
}
