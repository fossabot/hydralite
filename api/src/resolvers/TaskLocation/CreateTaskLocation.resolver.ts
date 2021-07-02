import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import ContextType from "~/types/Context.type";
import { User } from "@prisma/client";
import executeOrFail from "~/util/executeOrFail";
import { memberHasManageTasksPermisson } from "./validators/memberHasManageTasksPermisson.validator";
import { CreateTaskLocationArgs } from "./args/CreateTaskLocationArgs";
import { doesTaskLocationExist } from "./validators/doesTaskLocationExist";
import { TaskLocation } from "~/resolver-types/models";

@Resolver()
export class CreateTaskLocationResolver {
  @Mutation(() => TaskLocation)
  async createTaskLocation(
    @Ctx() { req, prisma }: ContextType,
    @Arg("args") args: CreateTaskLocationArgs
  ): Promise<TaskLocation> {
    // extract the logged in user
    const user: User = (req as any).user;

    // validators
    await memberHasManageTasksPermisson(user.id, args.projectId);
    await doesTaskLocationExist(args.projectId, args.name);

    return executeOrFail<TaskLocation>(
      async () =>
        await prisma.taskLocation.create({
          data: {
            name: args.name,
            project: { connect: { id: args.projectId } },
          },
        })
    );
  }
}
