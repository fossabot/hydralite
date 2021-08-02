import { Field, InputType } from "type-graphql";

@InputType()
export class FindInterestsInMassArgs {
  @Field({ nullable: true })
  queryString?: string;

  @Field({ nullable: true })
  limit?: number;

  @Field({ nullable: true })
  skip?: number;
}
