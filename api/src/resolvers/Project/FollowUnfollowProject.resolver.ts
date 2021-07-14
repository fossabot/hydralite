import { User } from "@prisma/client";
import { Arg, Ctx, Mutation, UseMiddleware } from "type-graphql";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { FollowUnfollowProjectArgs } from "./args/FollowUnfollowProjectArgs";

export default class FollowUnfollowProjectResolver {
  @UseMiddleware(isAuthenticated)
  @Mutation(() => String)
  async followProject(
    @Arg("args") { projectId }: FollowUnfollowProjectArgs,
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
          followers: {
            connect: {
              id: user.id,
            },
          },
        },
      });

      return "Followed project.";
    });
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => String)
  async unfollowProject(
    @Arg("args") { projectId }: FollowUnfollowProjectArgs,
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
          followers: {
            disconnect: {
              id: user.id,
            },
          },
        },
      });

      return "Unfollowed project.";
    });
  }
}
