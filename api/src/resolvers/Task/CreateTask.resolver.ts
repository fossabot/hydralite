import { Task } from "~/resolver-types/models";
import { Resolver, Mutation, UseMiddleware, Ctx, Arg } from "type-graphql";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { User } from "@prisma/client";
import { memberHasManageTasksPermisson } from "./validators/memberHasManageTasksPermisson.validator";
import { connectIdArray } from "~/util/connectIdArray";
import { CreateTaskArgs } from "./args/CreateTaskArgs";

@Resolver()
export default class CreateTaskResolver {
  @Mutation(() => Task)
  @UseMiddleware(isAuthenticated)
  async createTask(
    @Arg("args") args: CreateTaskArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<Task> {
    // extract the logged in user
    const user: User = (req as any).user;

    // validators
    await memberHasManageTasksPermisson(user.id, args.projectId);

    return executeOrFail<Task>(() => {
      type TaskData = Parameters<typeof prisma.task.create>[0]["data"];

      const task: TaskData = {
        name: args.name,
        description: args.description,
        deadline: args.deadline,
        isCompleted: false,
        isOpen: true,
        taskCompletedPercentage: 0,
        priority: args.priority,
        taskBoard: { connect: { id: args.taskBoardId } },
        author: { connect: { id: user.id } },
        coAuthors: connectIdArray(args.coAuthorIds),
        complexity: args.complexity,
        isOpenEndedTask: false, // will change below
        acceptingTaskRequiresApproval: false, // will change below
        rolesPermittedToAcceptTask: {}, // will change below
        assignees: {}, // will change below
        attachements: connectIdArray(args.attachmentIds),
        checklists: connectIdArray(args.checklistIds),
        duplicatedByTasks: connectIdArray(args.duplicatedByTaskIds),
        linkedBugReports: connectIdArray(args.linkedBugReportIds),
        linkedFeatureRequests: connectIdArray(args.linkedFeatureRequestIds),
        taskCategories: connectIdArray(args.taskCategoryIds),
        taskLocations: connectIdArray(args.taskLocationIds),
        waitlistedByTasks: connectIdArray(args.waitlistedByTaskIds),
        waitlistingTasks: connectIdArray(args.waitlistingTaskIds),
        linkedCommitUrls: args.linkedCommitUrls,
        linkedPrUrls: args.linkedPrUrls,
      };

      if (args.isOpenEndedTask) {
        task.isOpenEndedTask = true;

        task.acceptingTaskRequiresApproval = args.acceptingTaskRequiresApproval;

        task.rolesPermittedToAcceptTask = connectIdArray(
          args.rolesPermittedToAcceptTaskIds
        );
      } else {
        task.assignees = connectIdArray(args.assigneeIds);
      }

      return prisma.task.create({ data: task });
    });
  }
}
