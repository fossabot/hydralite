import { User } from "@prisma/client";
import { Arg, Ctx, Mutation, UseMiddleware } from "type-graphql";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { LikeUnlikeProjectArgs } from "./args/LikeUnlikeProjectArgs";

export default class LikeUnlikeProjectResolver {
  @UseMiddleware(isAuthenticated)
  @Mutation(() => String)
  async likeProject(
    @Arg("args") { projectId }: LikeUnlikeProjectArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<string> {
    return executeOrFail(async () => {
      // retrieve the currently logged in user
      const user: User = (req as any).user;

      await prisma.project.update({
        where: {
          id: projectId,
        },
        data: {
          likers: {
            connect: {
              id: user.id,
            },
          },
        },
      });

      return "Liked project.";
    });
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => String)
  async unlikeProject(
    @Arg("args") { projectId }: LikeUnlikeProjectArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<string> {
    return executeOrFail(async () => {
      // retrieve the currently logged in user
      const user: User = (req as any).user;

      await prisma.project.update({
        where: {
          id: projectId,
        },
        data: {
          likers: {
            disconnect: {
              id: user.id,
            },
          },
        },
      });

      return "Unliked project.";
    });
  }
}
