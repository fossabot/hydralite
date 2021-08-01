import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import ContextType from "~/types/Context.type";
import { User } from "@prisma/client";
import executeOrFail from "~/util/executeOrFail";
import { CreateTaskCategoryArgs } from "./args/CreateTaskCategoryArgs";
import { connectIdArray } from "~/util/connectIdArray";
import { TaskCategory } from "~/resolver-types/models";
import { TaskRepo } from "~/db/TaskRepo";
import { ProjectMemberRepo } from "~/db/ProjectMemberRepo";

const memberRepo = new ProjectMemberRepo();
const taskRepo = new TaskRepo();
@Resolver()
export class CreateTaskCategoryResolver {
  @Mutation(() => TaskCategory)
  async createTaskCategory(
    @Ctx() { req, prisma }: ContextType,
    @Arg("args") args: CreateTaskCategoryArgs
  ): Promise<TaskCategory> {
    // extract the logged in user
    const user: User = (req as any).user;

    // validate that user that is assigning the role has perms
    const loggedInMember = await memberRepo.findMemberByUserAndProjectId(
      user.id,
      args.projectId
    );
    await memberRepo.memberHasPermission(loggedInMember!, "canManageTasks");

    // validate that the task category doesnt exist already
    await taskRepo.findTaskCategoryByNameAndProjectId(
      args.name,
      args.projectId
    );

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
