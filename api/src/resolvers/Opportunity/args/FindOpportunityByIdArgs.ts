import { Field, InputType } from "type-graphql";

@InputType()
export class FindOpportunityByIdArgs {
  @Field()
  opportunityId: string;
}
