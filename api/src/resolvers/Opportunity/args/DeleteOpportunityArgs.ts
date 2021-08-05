import { Field, InputType } from "type-graphql";

@InputType()
export class DeleteOpportunityArgs {
  @Field()
  opportunityId: string;
}
