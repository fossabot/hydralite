import { Field, InputType } from "type-graphql";

@InputType()
export class HashtagArgs {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  id: string;
}
