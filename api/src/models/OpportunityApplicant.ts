import { Default, Id, Model, Property, Relation, UpdatedAt } from "decotix";
import { Field, ID, ObjectType } from "type-graphql";
import { Opportunity } from "./Opportunity";
import { User } from "./User";

@Model()
@ObjectType()
export class OpportunityApplicant {
  @Field(() => ID)
  @Property()
  @Id("uuid")
  id: string;

  @Field()
  @Property()
  isAccepted: boolean;

  @Relation()
  @Field(() => Opportunity)
  @Property(() => Opportunity)
  opportunity?: Opportunity;

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
