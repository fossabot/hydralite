import { Field, InputType } from "type-graphql";

@InputType()
export class AcceptOpportunityApplicantArgs {
  @Field()
  applicantId: string;
}
