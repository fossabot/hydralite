import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import ContextType from "~/types/Context.type";
import { User } from "@prisma/client";
import executeOrFail from "~/util/executeOrFail";
import { CreateTaskCategoryArgs } from "./args/CreateTaskCategoryArgs";
import { memberHasManageTasksPermisson } from "./validators/memberHasManageTasksPermisson.validator";
import { connectIdArray } from "~/util/connectIdArray";
import { doesTaskCategoryExist } from "./validators/doesTaskCategoryExist";
import { TaskCategory } from "~/resolver-types/models";

@Resolver()
export class CreateTaskCategoryResolver {
  @Mutation(() => TaskCategory)
  async createTaskCategory(
    @Ctx() { req, prisma }: ContextType,
    @Arg("args") args: CreateTaskCategoryArgs
  ): Promise<TaskCategory> {
    // extract the logged in user
    const user: User = (req as any).user;

    // validators
    await memberHasManageTasksPermisson(user.id, args.projectId);
    await doesTaskCategoryExist(args.projectId, args.name);

    return executeOrFail<TaskCategory>(() => {
      type TaskCategoryData = Parameters<
        typeof prisma.taskCategory.create
      >[0]["data"];

      const taskCategory: TaskCategoryData = {
        name: args.name,
        description: args.description,
        color: args.color,
        linkedTasks: connectIdArray(args.linkedTaskIds),
        project: { connect: { id: args.projectId } },
      };

      return prisma.taskCategory.create({ data: taskCategory });
    });
  }
}
