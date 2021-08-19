import { User } from "@prisma/client";
import { ApolloError } from "apollo-server-express";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import ContextType from "~/types/Context.type";
import { DeleteProjectArgs } from "./args/DeleteProjectArgs";

@Resolver()
export class DeleteProjectResolver {
  @Mutation(() => Boolean)
  @IsAuthenticated()
  async deleteProject(
    @Arg("args") { projectId }: DeleteProjectArgs,
    @Ctx() { prisma, req }: ContextType
  ) {
    const user = req.user as User;

    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project) throw new ApolloError("Project does not exist");

    if (project.ownerId !== user.id)
      throw new ApolloError("You are not authorized to delete this project");

    await prisma.project.delete({ where: { id: projectId } });

    return true;
  }
}
