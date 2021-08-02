import { Field, InputType } from "type-graphql";

@InputType()
export class DeleteInterestOrSkillArgs {
  @Field()
  id: string;
}
