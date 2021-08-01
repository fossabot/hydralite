import { Field, InputType } from "type-graphql";

@InputType()
export class FindInterestsInMassArgs {
  @Field()
  queryString?: string;

  @Field()
  limit?: number;

  @Field()
  skip?: number;
}
