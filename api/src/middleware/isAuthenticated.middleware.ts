import { ApolloError } from "apollo-server-express";
import { createMethodDecorator } from "type-graphql";
import ContextType from "~/types/Context.type";

export const IsAuthenticated = () =>
  createMethodDecorator<ContextType>(
    async ({ context: { req, prisma } }, next) => {
      const token = req.headers.authorization?.split(" ");
      if (!token) throw new ApolloError("Not Authenticated.");

      const accessTokenType = token[0];
      const accessToken = token[1];

      if (accessTokenType.toLowerCase() !== "bearer")
        throw new ApolloError("Not Authenticated.");
      if (!accessToken) throw new ApolloError("Not Authenticated.");

      const tokenPair = await prisma.tokenPair.findUnique({
        where: {
          accessToken,
        },
        include: {
          user: {
            include: {
              ownedProjects: true,
              allProjects: true,
              likedProjects: true,
              followedProjects: true,
              followers: true,
              following: true,
              oauthConnections: true,
              profile: true,
              createdHashtags: true,
              createdPostComments: true,
              posts: true,
              bugReports: true,
              featureRequests: true,
              likedPosts: true,
            },
          },
        },
      });

      if (!tokenPair) throw new ApolloError("Not Authenticated.");
      // TODO: check how old the token pair is, and if it is older than 30 days, then remove it and throw not authenticated

      req.user = tokenPair.user as any;
      return next();
    }
  );
