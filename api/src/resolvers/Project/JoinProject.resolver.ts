import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import ContextType from "~/types/Context.type";
import { User } from "@prisma/client";
import { JoinProjectArgs } from "./args/JoinProjectArgs";
import { Project } from "~/resolver-types/models";

@Resolver()
export class JoinProject {
  @UseMiddleware(isAuthenticated)
  @Mutation(() => Project)
  async joinProject(
    @Ctx() { req: { user: _ }, prisma }: ContextType,
    @Arg("args") { projectId }: JoinProjectArgs
  ): Promise<Project> {
    const user: User = _ as any;
    const projectToJoin = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
    });
    const isUserAlreadyMember = !!(await prisma.projectMember.findFirst({
      where: {
        projectId: projectToJoin?.id,
        userId: user.id,
      },
    }));

    // Validation
    if (!projectToJoin) throw new Error("Invalid project.");
    if (isUserAlreadyMember) throw new Error("Already a member.");

    const updatedProject = await prisma.project.update({
      where: {
        id: projectToJoin.id,
      },
      data: {
        members: {
          create: [
            {
              user: { connect: { id: user.id } },
              awaitingApproval: projectToJoin.newJoineesRequireApproval,
            },
          ],
        },
      },
      include: {
        members: true,
      },
    });

    console.log(updatedProject);

    return updatedProject;
  }
}
