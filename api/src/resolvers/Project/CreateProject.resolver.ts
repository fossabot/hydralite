import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { User } from "@prisma/client";
import { IsAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { CreateProjectArgs } from "./args/CreateProjectArgs";
import { Project } from "~/resolver-types/models";

@Resolver()
export default class CreateProjectResolver {
  @Mutation(() => Project)
  @IsAuthenticated()
  async createProject(
    @Arg("args") args: CreateProjectArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<Project | null> {
    // retrieve the currently logged in user
    const user: User = (req as any).user;

    return executeOrFail(async () => {
      const project = await prisma.project.create({
        data: {
          title: args.title,
          description: args.description || "",
          bannerUrl: args.bannerUrl || "",
          logoUrl: args.logoUrl || "",
          owner: {
            connect: { id: user.id },
          },
          members: {
            create: [
              {
                type: "projectTeam",
                user: { connect: { id: user.id } },
                overallPermissions: {
                  create: {
                    canAccessBugReports: true,
                    canAccessFeatureRequests: true,
                    canCreateProjectAnnouncements: true,
                    canGenerateProjectInvites: true,
                    canManageFundraisers: true,
                    canManageProjectGroups: true,
                    canManageProjectSurveys: true,
                    canManageProjectWaitlists: true,
                    canManageRoadmap: true,
                    canManageRoles: true,
                    canManageTasks: true,
                    canManageTesterOutsourcing: true,
                    canManageThirdPartyApps: true,
                    canManageUsers: true,
                    canModeratePosts: true,
                    canScheduleRooms: true,
                    canViewDeveloperInsights: true,
                    canViewLogs: true,
                    canViewProjectInsights: true,
                    canViewRoadmap: true,
                    canWriteDeveloperReviews: true,
                  },
                },
                awaitingApproval: false,
              },
            ],
          },
        },
      });

      return project;
    });
  }
}
