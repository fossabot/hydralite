import { User } from "@prisma/client";
import { ApolloError } from "apollo-server-express";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { FollowUnfollowUserArgs } from "./args/FollowUnfollowUserArgs";
@Resolver()
export default class FollowUnfollowUserResolver {
  @Mutation(() => String)
  @IsAuthenticated()
  async followUser(
    @Arg("args") args: FollowUnfollowUserArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<String> {
    const user: User = (req as any).user;

    if (args.userId === user.id)
      throw new ApolloError("You cant follow yourself.");

    return executeOrFail(async () => {
      // add user a to user b's followers
      await prisma.user.update({
        where: {
          id: args.userId,
        },
        data: {
          followers: {
            connect: {
              id: user.id,
            },
          },
        },
      });

      return "Followed user";
    });
  }

  @Mutation(() => String)
  @IsAuthenticated()
  async unfollowUser(
    @Arg("args") args: FollowUnfollowUserArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<String> {
    return executeOrFail(async () => {
      const user: User = (req as any).user;

      // remove user a from user b's followers
      await prisma.user.update({
        where: {
          id: args.userId,
        },
        data: {
          followers: {
            disconnect: {
              id: user.id,
            },
          },
        },
      });

      return "Unfollowed user";
    });
  }
}
