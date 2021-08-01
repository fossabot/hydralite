import { Field, InputType } from "type-graphql";

@InputType()
export class CreateInterestArgs {
  @Field()
  name: string;
}
