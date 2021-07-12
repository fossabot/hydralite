import { Field, InputType } from "type-graphql";

@InputType()
export class FindHashtagByNameArgs {
  @Field()
  name: string;
}
