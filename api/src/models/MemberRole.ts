import {
  Default,
  Id,
  Model,
  Property,
  Relation,
  Unique,
  UpdatedAt,
} from "decotix";
import { Field, ID, ObjectType } from "type-graphql";
import { Project } from "./Project";
import { ProjectMember } from "./ProjectMember";
import { ProjectMemberPermissions } from "./ProjectMemberPermissions";

@Model()
@ObjectType()
export class MemberRole {
  @Field(() => ID)
  @Property()
  @Id("uuid")
  id: string;

  @Field()
  @Property()
  @Unique()
  title: string;

  @Field()
  @Property()
  description: string;

  @Field(() => [ProjectMember])
  @Property(() => [ProjectMember])
  assignedMembers?: ProjectMember[];

  @Relation()
  @Field(() => ProjectMemberPermissions)
  @Property(() => ProjectMemberPermissions)
  permissions?: ProjectMemberPermissions;

  @Relation()
  @Field(() => Project)
  @Property(() => Project)
  project: Project;

  @Field()
  @Property()
  @Default("now")
  createdAt: Date;

  @Field()
  @Property()
  @UpdatedAt()
  updatedAt: Date;
}
