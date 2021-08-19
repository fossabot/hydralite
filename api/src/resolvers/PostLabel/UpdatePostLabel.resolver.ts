import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import ContextType from "~/types/Context.type";
import { PostLabel, User } from "~/models/index";
import { ProjectMemberRepo } from "~/db/ProjectMemberRepo";
import { UpdatePostLabelArgs } from "./args/UpdatePostLabelArgs";
import { PostLabelRepo } from "~/db/PostLabelRepo";
import executeOrFail from "~/util/executeOrFail";

const memberRepo = new ProjectMemberRepo();
const postLabelRepo = new PostLabelRepo();

@Resolver()
export class UpdatePostLabelResolver {
  @IsAuthenticated()
  @Mutation(() => PostLabel)
  async updatePostLabel(
    @Arg("args") args: UpdatePostLabelArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<PostLabel> {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    // retrieve the post label
    const postLabel = await postLabelRepo.findPostLabelById(args.id);

    // ensure user has perms to delete label
    const loggedInMember = await memberRepo.findMemberByUserAndProjectId(
      user.id,
      postLabel!.projectId
    );
    memberRepo.memberHasPermission(loggedInMember!, "canManagePosts");

    return executeOrFail(async () => {
      return await prisma.postLabel.update({
        where: { id: args.id },
        data: {
          title: args.title,
          description: args.description,
          color: args.color,
        },
      });
    }, "Error updating label.");
  }
}
