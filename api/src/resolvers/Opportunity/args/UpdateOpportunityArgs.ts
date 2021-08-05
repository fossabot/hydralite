import { Field, InputType } from "type-graphql";
import { TimeFrequency } from "../types";

@InputType()
export class UpdateOpportunityArgs {
  @Field()
  opportunityId: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => [String])
  requiredSkillIds: string[];

  @Field({ nullable: true })
  isPaid?: boolean;

  // TASK: Figure out payment amount stuff

  @Field({
    nullable: true,
    description: "Frequency of the capacity and payment",
  })
  // NOTE: Only applicable if opportunity is paid
  timeFrequency?: TimeFrequency;

  @Field({
    nullable: true,
    description:
      "Hours a member must dedicate to this project based on a particular timeFrequency",
  })
  // NOTE: Only applicable if opportunity is paid
  requiredCapacity?: number;
}
