import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import ContextType from "~/types/Context.type";
import { PostLabel, User } from "~/resolver-types/models";
import { ProjectMemberRepo } from "~/db/ProjectMemberRepo";
import { CreatePostLabelArgs } from "./args/CreatePostLabelArgs";

const memberRepo = new ProjectMemberRepo();

@Resolver()
export class CreatePostLabelResolver {
  @IsAuthenticated()
  @Mutation(() => PostLabel)
  async createPostLabel(
    @Arg("args") args: CreatePostLabelArgs,
    @Ctx() { req, prisma }: ContextType
  ) {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    // ensure user has perms to create label
    const loggedInMember = await memberRepo.findMemberByUserAndProjectId(
      user.id,
      args.projectId
    );
    memberRepo.memberHasPermission(loggedInMember!, "canManagePosts");

    type postLabelType = Parameters<typeof prisma.postLabel.create>[0]["data"];
    const postLabel: postLabelType = {
      title: args.title,
      description: args.description,
      color: args.color,
      project: { connect: { id: args.projectId } },
      creator: { connect: { id: user.id } },
    };

    const createdPostLabel = await prisma.postLabel.create({ data: postLabel });
    return createdPostLabel;
  }
}
