import { PrismaClient } from "@prisma/client";
import { ApolloError } from "apollo-server-express";
import { TaskLocation } from "~/resolver-types/models";

export class TaskRepo extends PrismaClient {
  findTaskLocationByNameAndProjectId = async (
    locationName: string,
    projectId: string,
    validate: boolean = true
  ): Promise<TaskLocation | null> => {
    const taskLocation = await this.taskLocation.findFirst({
      where: { projectId, name: locationName },
    });

    if (validate && taskLocation)
      throw new ApolloError("Task location already exists.", "resource_exists");

    return taskLocation;
  };
}
