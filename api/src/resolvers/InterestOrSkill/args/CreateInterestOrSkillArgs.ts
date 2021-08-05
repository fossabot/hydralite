import { Field, InputType } from "type-graphql";

@InputType()
export class CreateInterestOrSkillArgs {
  @Field()
  name: string;
}
