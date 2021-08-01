import { PrismaClient } from "@prisma/client";
import { ApolloError } from "apollo-server-express";
import { MemberRole } from "~/resolver-types/models";

export class MemberRoleRepo extends PrismaClient {
  findRoleById = async (
    roleId: string,
    validate = true
  ): Promise<MemberRole | null> => {
    // find role
    const role = await this.memberRole.findUnique({
      where: { id: roleId },
      include: { permissions: true },
    });

    // validate if it exists
    if (validate && !role)
      throw new ApolloError("Invalid Role Id.", "invalid_id");

    return role;
  };
}
