import { Id, Model, Property } from "decotix";
import { Field, ID, ObjectType } from "type-graphql";
import { MemberRole } from "./MemberRole";
import { ProjectMember } from "./ProjectMember";

@Model()
@ObjectType()
export class ProjectMemberPermissions {
  @Field(() => ID)
  @Property()
  @Id("uuid")
  id: string;

  @Field({ nullable: true })
  @Property({ nullable: true })
  canManageFeatureRequests: boolean;

  @Field({ nullable: true })
  @Property({ nullable: true })
  canManageBugReports: boolean;

  @Field({ nullable: true })
  @Property({ nullable: true })
  canManageMembers: boolean;

  @Field({ nullable: true })
  @Property({ nullable: true })
  canManageRoles: boolean;

  @Field({ nullable: true })
  @Property({ nullable: true })
  canManagePosts: boolean;

  @Field({ nullable: true })
  @Property({ nullable: true })
  canManageFundraisers: boolean;

  @Field({ nullable: true })
  @Property({ nullable: true })
  canManageWaitlists: boolean;

  @Field({ nullable: true })
  @Property({ nullable: true })
  canCreateUserReviews: boolean;

  @Field({ nullable: true })
  @Property({ nullable: true })
  canManageContributorOutsourcing: boolean;

  @Field(() => MemberRole, { nullable: true })
  @Property(() => MemberRole, { nullable: true })
  memberRole?: MemberRole;

  @Field(() => ProjectMember, { nullable: true })
  @Property(() => ProjectMember, { nullable: true })
  projectMember?: ProjectMember;
}
