import { PrismaClient } from "@prisma/client";
import { ApolloError } from "apollo-server-express";
import { ProjectRole } from "~/resolver-types/models";

export class ProjectRoleRepo extends PrismaClient {
  findRoleById = async (
    roleId: string,
    validate = true
  ): Promise<ProjectRole | null> => {
    // find role
    const role = await this.projectRole.findUnique({
      where: { id: roleId },
      include: { permissions: true },
    });

    // validate if it exists
    if (validate && !role)
      throw new ApolloError("Invalid Role Id.", "invalid_id");

    return role;
  };
}
