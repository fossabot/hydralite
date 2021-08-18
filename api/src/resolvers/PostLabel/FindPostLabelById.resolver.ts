import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import ContextType from "~/types/Context.type";
import { PostLabel } from "~/models/index";
import executeOrFail from "~/util/executeOrFail";
import { FindPostLabelByIdArgs } from "./args/FindPostLabelByIdArgs";

@Resolver()
export class FindPostLabelById {
  @IsAuthenticated()
  @Mutation(() => PostLabel)
  async findPostLabelById(
    @Arg("args") args: FindPostLabelByIdArgs,
    @Ctx() { prisma }: ContextType
  ): Promise<PostLabel | null> {
    return await executeOrFail(async () => {
      return await prisma.postLabel.findUnique({
        where: { id: args.labelId },
      });
    }, "Error finding label.");
  }
}
