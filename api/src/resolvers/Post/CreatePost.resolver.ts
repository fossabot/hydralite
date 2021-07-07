import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { CreatePostArgs } from "./args/CreatePostArgs";
import ContextType from "~/types/Context.type";
import { User } from "~/resolver-types/models";
import { connectIdArray } from "~/util/connectIdArray";
@Resolver()
export class CreatePostResolver {
  @UseMiddleware(isAuthenticated)
  @Mutation()
  async createPost(
    @Arg("args") args: CreatePostArgs,
    @Ctx() { req, prisma }: ContextType
  ) {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    type postType = Parameters<typeof prisma.post.create>[0]["data"];
    const post: postType = {
      title: args.title,
      description: args.description,
      isAnnouncement: false,
      hashtags: connectIdArray(args.hashtagIds),
      creator: { connect: { id: user.id } },
      type: args.type,
      isPublic: true,
      project: { connect: { id: args.projectId } },
      categories: connectIdArray(args.categoryIds),
      labels: connectIdArray(args.labelIds),
      repostedFrom: { connect: { id: args.repostedFromId } },
    };

    // TASK: if they provide isAnnouncement, make sure they have perms
    // TASK: if they set isPublic to false and assign viewers, make sure they have perms

    const createdPost = await prisma.post.create({ data: post });
    return createdPost;
  }
}
