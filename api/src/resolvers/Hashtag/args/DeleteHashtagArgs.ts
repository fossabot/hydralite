import { Field, InputType } from "type-graphql";

@InputType()
export class DeleteHashtagArgs {
  @Field()
  hashtag_id: string;
}
