import { Field, InputType } from "type-graphql";

@InputType()
export class FindOpportunitiesInMassArgs {
  @Field({ nullable: true })
  limit?: number;

  @Field({ nullable: true })
  skip?: number;
}
