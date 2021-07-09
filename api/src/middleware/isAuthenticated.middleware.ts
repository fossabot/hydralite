import { ApolloError } from "apollo-server-express";
import { MiddlewareFn } from "type-graphql";
import ContextType from "~/types/Context.type";

export const isAuthenticated: MiddlewareFn<ContextType> = async (
  { context: { req, prisma } },
  next
) => {
  if (!req.isAuthenticated()) throw new ApolloError("Not Authenticated.");

  const userId = (req.user as any).id;
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
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
      postLabels: true,
      subscribedPostCategories: true,
    },
  });
  req.user = user as any;

  return next();
};
