import { Default, Id, Model, Property, Relation, UpdatedAt } from "decotix";
import { Field, ID, ObjectType } from "type-graphql";
import { InterestOrSkill } from "./InterestOrSkill";
import { MemberRole } from "./MemberRole";
import { Opportunity } from "./Opportunity";
import { Post } from "./Post";
import { PostLabel } from "./PostLabel";
import { ProjectMember } from "./ProjectMember";
import { User } from "./User";

@Model()
@ObjectType()
export class Project {
  @Field(() => ID)
  @Property()
  @Id("uuid")
  id: string;

  @Field()
  @Property()
  title: string;

  @Field()
  @Property()
  description: string;

  @Field()
  @Property()
  logoUrl: string;

  @Field()
  @Property()
  bannerUrl: string;

  @Field()
  @Property()
  @Default("true")
  newJoineesRequireApproval: boolean;

  @Field(() => User)
  @Relation()
  @Property(() => User)
  owner: User;

  @Field(() => [ProjectMember])
  @Property(() => [ProjectMember])
  members: ProjectMember[];

  @Field(() => [User])
  @Relation("UserLikedProjectsRelation", { references: ["id"] })
  @Property(() => [User])
  likers: User[];

  @Field(() => [User])
  @Relation("UserFollowedProjectsRelation", { references: ["id"] })
  @Property(() => [User])
  followers: User[];

  @Field(() => [Opportunity])
  @Property(() => [Opportunity])
  opportunities: Opportunity[];

  @Field(() => [MemberRole])
  @Property(() => [MemberRole])
  roles: MemberRole[];

  @Field(() => [Post])
  @Property(() => [Post])
  posts: Post[];

  @Field(() => [PostLabel])
  @Property(() => [PostLabel])
  postLabels: PostLabel[];

  @Field(() => [InterestOrSkill])
  @Property(() => [InterestOrSkill])
  interestOrSkills: InterestOrSkill[];

  @Field()
  @Property()
  @Default("now")
  createdAt: Date;

  @Field()
  @Property()
  @UpdatedAt()
  updatedAt: Date;
}
