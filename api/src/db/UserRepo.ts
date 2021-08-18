import { PrismaClient, User } from "@prisma/client";
import { PassportGenericUser } from "~/auth/types/PassportGenericUser.type";
import executeOrFail from "~/util/executeOrFail";
import { ApolloError } from "apollo-server-express";
import { AuthProviderType } from "~/types/AuthProvider.type";

export default class UserRepo extends PrismaClient {
  findOrCreateUser = async (
    oauthProvider: AuthProviderType,
    genericUserData: PassportGenericUser
  ): Promise<User> => {
    return executeOrFail(async () => {
      // find a user using the id they have on the oauth service
      const existingUser = (
        await this.oauthConnection.findFirst({
          where: {
            oauthServiceUserId:
              genericUserData.primaryOauthConnection.oauthServiceUserId,
            oauthService: oauthProvider,
          },
          include: {
            user: true,
          },
        })
      )?.user;

      if (existingUser) return existingUser;

      // create the user if they dont exist
      const user = this.user.create({
        data: {
          email: genericUserData.email || "",
          profile: {
            create: {
              avatarURL: genericUserData.profile.avatarUrl,
              bio: genericUserData.profile.bio || "",
            },
          },
          username: genericUserData.username,
          hydra: 0,
          oauthConnections: {
            create: [
              {
                oauthService:
                  genericUserData.primaryOauthConnection.oauthService,
                email: genericUserData.primaryOauthConnection.email || "",
                username: genericUserData.primaryOauthConnection.username,
                oauthServiceUserId: String(
                  genericUserData.primaryOauthConnection.oauthServiceUserId
                ),
                isPrimary: true,
              },
            ],
          },
        },
        include: {
          oauthConnections: true,
          profile: true,
        },
      });
      return user;
    }, "Error creating user");
  };

  async userCanViewPrivatePost(
    userId: string,
    postId: string,
    validate = true
  ) {
    const isPostViewable = !!(await this.user.findFirst({
      where: {
        id: userId,
        viewablePosts: { some: { id: postId } },
      },
    }));

    if (validate && !isPostViewable)
      throw new ApolloError(
        "This action requires elevation.",
        "not_authorized"
      );

    return isPostViewable;
  }

  async userIsSiteAdmin(userId: string, validate = true) {
    const user = await executeOrFail(
      async () => await this.user.findUnique({ where: { id: userId } })
    );
    if (!user) throw new ApolloError("Invalid user id.", "invalid_id");
    if (validate && !user.isSiteAdmin)
      throw new ApolloError(
        "This action requires elevation",
        "perms_insufficient"
      );

    return user.isSiteAdmin;
  }
}
