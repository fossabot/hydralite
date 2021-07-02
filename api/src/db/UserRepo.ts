import { PrismaClient } from "@prisma/client";
import { PassportGenericUser } from "~/auth/types/PassportGenericUser.type";
import executeOrFail from "~/util/executeOrFail";
import { User } from "~/resolver-types/models";

export default class UserRepo extends PrismaClient {
    findOrCreateUser = async (
        oauthProvider: "discord" | "github" | "twitter" | "google",
        genericUserData: PassportGenericUser
    ): Promise<User> => {
        return executeOrFail(async () => {
            // find a user using the id they have on the oauth service
            const existingUser = (
                await this.oauthConnection.findFirst({
                    where: {
                        oauthServiceUserId:
                            genericUserData.primaryOauthConnection
                                .oauthServiceUserId,
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
                    joinDate: new Date(),
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
                                    genericUserData.primaryOauthConnection
                                        .oauthService,
                                email:
                                    genericUserData.primaryOauthConnection
                                        .email || "",
                                username:
                                    genericUserData.primaryOauthConnection
                                        .username,
                                oauthServiceUserId: String(
                                    genericUserData.primaryOauthConnection
                                        .oauthServiceUserId
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
}
