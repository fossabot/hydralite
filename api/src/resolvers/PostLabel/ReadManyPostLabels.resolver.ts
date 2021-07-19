import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import ContextType from "~/types/Context.type";
import { PostLabel } from "~/resolver-types/models";
import executeOrFail from "~/util/executeOrFail";
import { ReadManyPostLabelsArgs } from "./args/ReadManyPostLabelsArgs";

@Resolver()
export class ReadManyPostLabelsResolver {
  @IsAuthenticated()
  @Mutation(() => [PostLabel])
  async readManyPostLabels(
    @Arg("args") args: ReadManyPostLabelsArgs,
    @Ctx() { prisma }: ContextType
  ): Promise<PostLabel[] | null> {
    return await executeOrFail(async () => {
      return await prisma.postLabel.findMany({
        where: { projectId: args.projectId },
      });
    }, "Error finding label.");
  }
}
