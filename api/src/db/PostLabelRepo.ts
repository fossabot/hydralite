import { PrismaClient } from "@prisma/client";
import { ApolloError } from "apollo-server-express";
import { PostLabel } from "~/resolver-types/models";

export class PostLabelRepo extends PrismaClient {
  async findPostLabelById(
    id: string,
    validate: boolean = true
  ): Promise<PostLabel | null> {
    const postLabel = await this.postLabel.findUnique({ where: { id } });
    if (validate && !postLabel)
      throw new ApolloError("This label doesn't exist.", "invalid_id");

    return postLabel;
  }
}
