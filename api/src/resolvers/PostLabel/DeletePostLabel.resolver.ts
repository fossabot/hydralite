import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import ContextType from "~/types/Context.type";
import { User } from "~/models/index";
import { ProjectMemberRepo } from "~/db/ProjectMemberRepo";
import { DeletePostLabelArgs } from "./args/DeletePostLabelArgs";
import executeOrFail from "~/util/executeOrFail";
import { PostLabelRepo } from "~/db/PostLabelRepo";

const memberRepo = new ProjectMemberRepo();
const postLabelRepo = new PostLabelRepo();

@Resolver()
export class DeletePostLabelResolver {
  @IsAuthenticated()
  @Mutation(() => String)
  async deletePostLabel(
    @Arg("args") args: DeletePostLabelArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<string> {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    // retrieve the post label
    const postLabel = await postLabelRepo.findPostLabelById(args.labelId);

    // ensure user has perms to delete label
    const loggedInMember = await memberRepo.findMemberByUserAndProjectId(
      user.id,
      postLabel!.projectId
    );
    memberRepo.memberHasPermission(loggedInMember!, "canManagePosts");

    await executeOrFail(async () => {
      await prisma.postLabel.delete({ where: { id: args.labelId } });
    }, "Error deleting label.");

    return "Successfully deleted label.";
  }
}
