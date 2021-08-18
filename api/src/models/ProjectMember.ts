import { Default, Id, Model, Property, Relation, UpdatedAt } from "decotix";
import { Field, ID, ObjectType } from "type-graphql";
import { ProjectMemberType } from "~/enums/ProjectMemberType";
import { MemberRole } from "./MemberRole";
import { Project } from "./Project";
import { ProjectMemberPermissions } from "./ProjectMemberPermissions";
import { User } from "./User";

@Model()
@ObjectType()
export class ProjectMember {
  @Field(() => ID)
  @Property()
  @Id("uuid")
  id: string;

  @Field(() => [MemberRole])
  @Property(() => [MemberRole])
  roles?: MemberRole[];

  @Field()
  @Property()
  awaitingApproval: boolean;

  @Field(() => ProjectMemberType)
  @Property(() => ProjectMemberType)
  @Default(ProjectMemberType.communityMember)
  type: ProjectMemberType;

  @Field(() => ProjectMemberPermissions, { nullable: true })
  @Relation({
    fields: ["projectMemberPermissionsId"],
    references: ["id"],
  })
  @Property(() => ProjectMemberPermissions, { nullable: true })
  overallPermissions?: ProjectMemberPermissions;

  // TODO: project
  @Relation()
  @Field(() => Project)
  @Property(() => Project)
  project?: Project;

  @Relation()
  @Field(() => User)
  @Property(() => User)
  user?: User;

  @Field()
  @Property()
  @Default("now")
  createdAt: Date;

  @Field()
  @Property()
  @UpdatedAt()
  updatedAt: Date;
}
