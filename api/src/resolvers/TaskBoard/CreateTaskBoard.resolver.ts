import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import ContextType from "~/types/Context.type";
import { User } from "@prisma/client";
import { CreateTaskBoardArgs } from "./args/CreateTaskBoardArgs";
import executeOrFail from "~/util/executeOrFail";
import { TaskBoard } from "~/resolver-types/models";
import { ProjectMemberRepo } from "~/db/ProjectMemberRepo";

const memberRepo = new ProjectMemberRepo();
@Resolver()
export class CreateTaskBoardResolver {
  @Mutation(() => TaskBoard)
  async createTaskBoard(
    @Ctx() { req, prisma }: ContextType,
    @Arg("args") args: CreateTaskBoardArgs
  ): Promise<TaskBoard> {
    // extract the logged in user
    const user: User = (req as any).user;

    // validate that user has perms
    const loggedInMember = await memberRepo.findMemberByUserAndProjectId(
      user.id,
      args.projectId
    );
    await memberRepo.memberHasPermission(loggedInMember!, "canManageTasks");

    return executeOrFail<TaskBoard>(() => {
      type TaskBoardData = Parameters<
        typeof prisma.taskBoard.create
      >[0]["data"];

      const taskBoard: TaskBoardData = {
        title: args.title,
        description: args.description,
        project: { connect: { id: args.projectId } },
      };

      return prisma.taskBoard.create({ data: taskBoard });
    });
  }
}
