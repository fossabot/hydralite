import { Id, Model, Property, Relation } from "decotix";
import { Field, ID, ObjectType } from "type-graphql";
import { InterestOrSkill } from "./InterestOrSkill";
import { User } from "./User";

@Model()
@ObjectType()
export class UserProfile {
  @Field(() => ID)
  @Property()
  @Id("uuid")
  id: string;

  @Field(() => User, { nullable: true })
  @Relation("UserProfileRelation")
  @Property(() => User, { nullable: true })
  user?: User;

  @Field()
  @Property()
  avatarURL: string;

  @Field()
  @Property()
  bio: string;

  @Field(() => [InterestOrSkill])
  @Property(() => [InterestOrSkill])
  interestOrSkills?: InterestOrSkill[];
}
