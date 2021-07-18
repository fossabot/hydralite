import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import ContextType from '~/types/Context.type';
import { User } from '@prisma/client';
import executeOrFail from '~/util/executeOrFail';
import { CreateTaskLocationArgs } from './args/CreateTaskLocationArgs';
import { TaskLocation } from '~/resolver-types/models';
import { ProjectMemberRepo } from '~/db/ProjectMemberRepo';
import { TaskRepo } from '~/db/TaskRepo';

const memberRepo = new ProjectMemberRepo();
const taskRepo = new TaskRepo();
@Resolver()
export class CreateTaskLocationResolver {
  @Mutation(() => TaskLocation)
  async createTaskLocation(
    @Ctx() { req, prisma }: ContextType,
    @Arg('args') args: CreateTaskLocationArgs
  ): Promise<TaskLocation> {
    // extract the logged in user
    const user: User = (req as any).user;

    // validate that user that is assigning the role has perms
    const loggedInMember = await memberRepo.findMemberByUserAndProjectId(
      user.id,
      args.projectId
    );
    await memberRepo.memberHasPermission(loggedInMember!, 'canManageTasks');

    // validate that the task location doesnt exist already
    await taskRepo.findTaskLocationByNameAndProjectId(
      args.name,
      args.projectId
    );

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
