import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import ContextType from "~/types/Context.type";
import { Post, User } from "~/resolver-types/models";
import { connectIdArray } from "~/util/connectIdArray";
import { ProjectMemberRepo } from "~/db/ProjectMemberRepo";
import { UpdatePostArgs } from "./args/UpdatePostArgs";
import { PostRepo } from "~/db/PostRepo";

const memberRepo = new ProjectMemberRepo();
const postRepo = new PostRepo();

@Resolver()
export class UpdatePostResolver {
  @UseMiddleware(isAuthenticated)
  @Mutation(() => Post)
  async updatePost(
    @Arg("args") args: UpdatePostArgs,
    @Ctx() { req, prisma }: ContextType
  ) {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    // ensure the user trying to update the post was the creator
    await postRepo.userIsCreatorOfPost(user.id, args.id);

    type postType = Parameters<typeof prisma.post.update>[0]["data"];
    const post: postType = {};

    if (args.title) post.title = args.title;
    if (args.description) post.description = args.description;
    if (args.hashtagIds) post.hashtags = connectIdArray(args.hashtagIds);
    if (args.type) post.type = args.type;
    if (args.categoryIds) post.categories = connectIdArray(args.categoryIds);
    if (args.labelIds) post.labels = connectIdArray(args.labelIds);

    // make sure user can manage posts in this project if they are trying to make this post an announcement or make a post private
    if (args.isAnnouncement || !args.isPublic || args.visibleToRolesIds) {
      const loggedInMember = await memberRepo.findMemberByUserAndProjectId(
        user.id,
        args.projectId
      );
      memberRepo.memberHasPermission(loggedInMember!, "canModeratePosts");

      post.isAnnouncement = args.isAnnouncement || false;
      post.isPublic = args.isPublic || false;
      post.visibleTo = post.isPublic
        ? connectIdArray(args.visibleToRolesIds)
        : {};
    }

    const updatedPost = await prisma.post.update({
      where: { id: args.id },
      data: post,
    });
    return updatedPost;
  }
}
