import { Field, InputType } from "type-graphql";

@InputType()
export class FetchOpportunityApplicantsInMassArgs {
  @Field()
  opportunityId: string;

  @Field({ nullable: true })
  limit?: number;

  @Field({ nullable: true })
  skip?: number;

  // TASK: add text search ability too
}
