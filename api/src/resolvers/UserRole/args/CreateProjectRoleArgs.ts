import { Field, InputType } from "type-graphql";

@InputType()
export class CreateProjectRoleArgs {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  projectId: string;

  @Field({ nullable: true })
  canAccessFeatureRequests?: boolean;

  @Field({ nullable: true })
  canAccessBugReports?: boolean;

  @Field({ nullable: true })
  canManageUsers?: boolean;

  @Field({ nullable: true })
  canManageRoles?: boolean;

  @Field({ nullable: true })
  canManageTasks?: boolean;

  @Field({ nullable: true })
  canCreateProjectAnnouncements?: boolean;

  @Field({ nullable: true })
  canModeratePosts?: boolean;

  @Field({ nullable: true })
  canManageProjectGroups?: boolean;

  @Field({ nullable: true })
  canGenerateProjectInvites?: boolean;

  @Field({ nullable: true })
  canViewRoadmap?: boolean;

  @Field({ nullable: true })
  canManageRoadmap?: boolean;

  @Field({ nullable: true })
  canScheduleRooms?: boolean;

  @Field({ nullable: true })
  canManageFundraisers?: boolean;

  @Field({ nullable: true })
  canManageThirdPartyApps?: boolean;

  @Field({ nullable: true })
  canManageProjectSurveys?: boolean;

  @Field({ nullable: true })
  canViewProjectInsights?: boolean;

  @Field({ nullable: true })
  canViewDeveloperInsights?: boolean;

  @Field({ nullable: true })
  canManageProjectWaitlists?: boolean;

  @Field({ nullable: true })
  canManageTesterOutsourcing?: boolean;

  @Field({ nullable: true })
  canWriteDeveloperReviews?: boolean;

  @Field({ nullable: true })
  canViewLogs?: boolean;
}
