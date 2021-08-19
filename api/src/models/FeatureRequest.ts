import { Default, Id, Model, Property, Relation, UpdatedAt } from "decotix";
import { Field, ID, ObjectType } from "type-graphql";
import { User } from "./User";

@Model()
@ObjectType()
export class FeatureRequest {
  @Field(() => ID)
  @Property()
  @Id("uuid")
  id: string;

  @Field()
  @Property()
  name: string;

  @Field({ nullable: true })
  @Property({ nullable: true })
  description?: string;

  @Field(() => User)
  @Relation()
  @Property(() => User)
  creator?: User;

  @Field()
  @Property()
  isCreatedByProjectMember: boolean;

  // TODO: attachments

  @Field()
  @Property()
  featureGeneratedFromRequest: string;

  @Field()
  @Property()
  @Default("now")
  createdAt: Date;

  @Field()
  @Property()
  @UpdatedAt()
  updatedAt: Date;
}
