import { PrismaClient } from "@prisma/client";
import { ApolloError } from "apollo-server-express";

export class PostRepo extends PrismaClient {
  async findPostById(id: string, validate: boolean = true) {
    const post = await this.post.findUnique({ where: { id } });
    if (validate && !post)
      throw new ApolloError("This post doesn't exist.", "invalid_id");

    return post;
  }

  async userIsCreatorOfPost(
    creatorId: string,
    postId: string,
    validate: boolean = true
  ) {
    const userInPost = !!(await this.post.findFirst({
      where: { id: postId, creatorId },
    }));
    if (validate && !userInPost)
      throw new ApolloError("User does not own post", "invalid_id");

    return userInPost;
  }
}
