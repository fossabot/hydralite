import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import ContextType from "~/types/Context.type";
import { User } from "@prisma/client";
import { JoinProjectArgs } from "./args/JoinProjectArgs";
import { Project } from "~/resolver-types/models/Project";
import { ProjectMemberRepo } from "~/db/ProjectMemberRepo";
import { ApolloError } from "apollo-server-express";

const memberRepo = new ProjectMemberRepo();
@Resolver()
export class JoinProject {
  @IsAuthenticated()
  @Mutation(() => Project)
  async joinProject(
    @Ctx() { req: { user: _ }, prisma }: ContextType,
    @Arg("args") { projectId, role }: JoinProjectArgs
  ) {
    const user: User = _ as any;

    // validate project existence
    const projectToJoin = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!projectToJoin) throw new ApolloError("Invalid project.", "invalid_id");

    // validate that member doesnt already exist in the project
    if (
      await memberRepo.findMemberByUserAndProjectId(user.id, projectId, false)
    )
      throw new ApolloError("Already in project", "duplicate_resource");

    const updatedProject = await prisma.project.update({
      where: {
        id: projectToJoin.id,
      },
      data: {
        members: {
          create: [
            {
              user: { connect: { id: user.id } },
              awaitingApproval:
                projectToJoin.newJoineesRequireApproval ||
                role === "moderator" ||
                role === "projectTeam",
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
