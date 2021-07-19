import { PrismaClient } from '@prisma/client';
import { ApolloError } from 'apollo-server-express';
import { Post } from '~/resolver-types/models';

export class PostRepo extends PrismaClient {
  async findPostById(
    id: string,
    validate: boolean = true
  ): Promise<Post | null> {
    const post = await this.post.findUnique({
      where: { id },
      include: { visibleTo: true },
    });
    if (validate && !post)
      throw new ApolloError("This post doesn't exist.", 'invalid_id');

    return post;
  }

  async userIsCreatorOfPost(
    userId: string,
    postId: string,
    validate: boolean = true
  ) {
    const userInPost = !!(await this.post.findFirst({
      where: { id: postId, creatorId: userId },
    }));
    if (validate && !userInPost)
      throw new ApolloError('User does not own post', 'invalid_id');

    return userInPost;
  }
}
