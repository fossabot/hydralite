import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import ContextType from "~/types/Context.type";
import { User } from "~/resolver-types/models";
import { ProjectMemberRepo } from "~/db/ProjectMemberRepo";
import { DeletePostLabelArgs } from "./args/DeletePostLabelArgs";
import executeOrFail from "~/util/executeOrFail";

const memberRepo = new ProjectMemberRepo();

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

    // ensure user has perms to delete label
    const loggedInMember = await memberRepo.findMemberByUserAndProjectId(
      user.id,
      args.projectId
    );
    memberRepo.memberHasPermission(loggedInMember!, "canManagePosts");

    await executeOrFail(async () => {
      await prisma.postLabel.delete({ where: { id: args.labelId } });
    }, "Error deleting label.");

    return "Successfully deleted label.";
  }
}
