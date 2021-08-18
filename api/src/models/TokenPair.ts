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
import { User } from "./User";

@Model()
@ObjectType()
export class TokenPair {
  @Field(() => ID)
  @Property()
  @Id("uuid")
  id: string;

  @Field()
  @Property()
  @Unique()
  accessToken: string;

  @Field()
  @Property()
  @Unique()
  refreshToken: string;

  @Field(() => User)
  @Property(() => User)
  @Relation()
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
