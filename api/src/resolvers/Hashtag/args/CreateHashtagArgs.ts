import { Field, InputType } from "type-graphql";

@InputType()
export class CreateHashtagArgs {
  @Field()
  name: string;
}
