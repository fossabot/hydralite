import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import ContextType from "~/types/Context.type";
import { PostLabel } from "~/resolver-types/models";
import executeOrFail from "~/util/executeOrFail";
import { FindManyPostLabelsArgs } from "./args/FindManyPostLabelsArgs";

@Resolver()
export class FindManyPostLabelsResolver {
  @IsAuthenticated()
  @Mutation(() => [PostLabel])
  async findManyPostLabels(
    @Arg("args") args: FindManyPostLabelsArgs,
    @Ctx() { prisma }: ContextType
  ): Promise<PostLabel[] | null> {
    return await executeOrFail(async () => {
      return await prisma.postLabel.findMany({
        where: { projectId: args.projectId },
      });
    }, "Error finding label.");
  }
}
