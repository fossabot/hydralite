import {
  Default,
  Id,
  Model,
  Property,
  Relation,
  Unique,
  UpdatedAt,
} from "decotix";
import { BigIntResolver } from "graphql-scalars";
import { Field, ID, ObjectType } from "type-graphql";
import { Post } from "./Post";
import { User } from "./User";

@Model()
@ObjectType()
export class Hashtag {
  @Field(() => ID)
  @Property()
  @Id("uuid")
  id: string;

  @Field()
  @Property()
  @Unique()
  name: string;

  @Field(() => BigIntResolver)
  @Property()
  numOfPosts: bigint;

  @Field(() => User)
  @Property(() => User)
  @Relation()
  creator?: User;

  @Field(() => [Post])
  @Property(() => [Post])
  posts?: Post[];

  @Field()
  @Property()
  @Default("now")
  createdAt: Date;

  @Field()
  @Property()
  @UpdatedAt()
  updatedAt: Date;
}
