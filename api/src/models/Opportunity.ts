import { Default, Id, Model, Property, Relation, UpdatedAt } from "decotix";
import { Field, ID, Int, ObjectType } from "type-graphql";
import { TimeFrequency } from "~/enums/TimeFrequency";
import { InterestOrSkill } from "./InterestOrSkill";
import { OpportunityApplicant } from "./OpportunityApplicant";
import { Project } from "./Project";

@Model()
@ObjectType()
export class Opportunity {
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

  @Field(() => [InterestOrSkill])
  @Property(() => [InterestOrSkill])
  requiredSkills: InterestOrSkill[];

  @Field()
  @Property()
  isPaid: boolean;

  @Field(() => Int, { nullable: true })
  @Property(() => Int, { nullable: true })
  paymentAmount?: number;

  @Field(() => TimeFrequency, { nullable: true })
  @Property(() => TimeFrequency, { nullable: true })
  timeFrequency?: TimeFrequency;

  @Field(() => Int, { nullable: true })
  @Property(() => Int, { nullable: true })
  requiredCapacity?: number;

  @Field(() => [OpportunityApplicant])
  @Property(() => [OpportunityApplicant])
  applicants: OpportunityApplicant[];

  @Field(() => Project)
  @Property(() => Project)
  @Relation()
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
