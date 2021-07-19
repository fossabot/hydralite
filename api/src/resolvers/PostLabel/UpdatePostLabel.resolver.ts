import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import ContextType from "~/types/Context.type";
import { PostLabel, User } from "~/resolver-types/models";
import { ProjectMemberRepo } from "~/db/ProjectMemberRepo";
import { UpdatePostLabelArgs } from "./args/UpdatePostLabelArgs";

const memberRepo = new ProjectMemberRepo();

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

    // ensure user has perms to update label
    const loggedInMember = await memberRepo.findMemberByUserAndProjectId(
      user.id,
      args.projectId
    );
    memberRepo.memberHasPermission(loggedInMember!, "canManagePosts");

    type postLabelType = Parameters<typeof prisma.postLabel.update>[0]["data"];
    const postLabel: postLabelType = {
      title: args.title,
      description: args.description,
      color: args.color,
    };

    const updatedPostLabel = await prisma.postLabel.update({
      where: { id: args.id },
      data: postLabel,
    });
    return updatedPostLabel;
  }
}
