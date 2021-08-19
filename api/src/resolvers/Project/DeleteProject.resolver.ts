import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import ContextType from "~/types/Context.type";
import { DeleteProjectArgs } from "./args/DeleteProjectArgs";

@Resolver()
export class DeleteProjectResolver {
  @Mutation(() => Boolean)
  async deleteProject(
    @Arg("args") { projectId }: DeleteProjectArgs,
    @Ctx() { prisma }: ContextType
  ) {
    await prisma.project.delete({
      where: { id: projectId },
    });

    return true;
  }
}
