import {
  Default,
  Id,
  Model,
  Property,
  Relation,
  Unique,
  UpdatedAt,
} from "decotix";
import { Field, ID, Int, ObjectType } from "type-graphql";
import { Opportunity } from "./Opportunity";
import { Project } from "./Project";
import { User } from "./User";
import { UserProfile } from "./UserProfile";

@Model()
@ObjectType()
export class InterestOrSkill {
  @Field(() => ID)
  @Property()
  @Id("uuid")
  id: string;

  @Field()
  @Property()
  @Unique()
  name: string;

  @Field(() => Int)
  @Property(() => Int)
  @Default("0")
  uses: number;

  @Field(() => User)
  @Relation()
  @Property(() => User)
  creator: User;

  @Field(() => [Project])
  @Property(() => [Project])
  linkedProjects: Project[];

  @Field(() => [UserProfile])
  @Property(() => [UserProfile])
  linkedProfiles: UserProfile[];

  @Field(() => [Opportunity])
  @Property(() => [Opportunity])
  linkedOpportunities: Opportunity[];

  @Field()
  @Property()
  @Default("now")
  createdAt: Date;

  @Field()
  @Property()
  @UpdatedAt()
  updatedAt: Date;
}
