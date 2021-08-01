import { Field, InputType } from "type-graphql";

@InputType()
export class DeleteInterestArgs {
  @Field()
  id: string;
}
