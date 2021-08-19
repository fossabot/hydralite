import { Default, Id, Model, Property, Relation, UpdatedAt } from "decotix";
import { OauthConnectionService } from "~/enums/OauthConnectionService";
import { Field, ID, ObjectType } from "type-graphql";
import { User } from "./User";

@Model()
@ObjectType()
export class OauthConnection {
  @Field(() => ID)
  @Property()
  @Id("uuid")
  id: string;

  @Field(() => OauthConnectionService)
  @Property(() => OauthConnectionService)
  oauthService: OauthConnectionService;

  @Field()
  @Property()
  email: string;

  @Field()
  @Property()
  username: string;

  @Field()
  @Property()
  oauthServiceUserId: string;

  @Field()
  @Property()
  isPrimary: boolean;

  @Relation()
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
