import { Field, InputType } from "type-graphql";

@InputType()
export class FindInterestsOrSkillsInMassArgs {
  @Field({ nullable: true })
  queryString?: string;

  @Field({ nullable: true })
  limit?: number;

  @Field({ nullable: true })
  skip?: number;
}
