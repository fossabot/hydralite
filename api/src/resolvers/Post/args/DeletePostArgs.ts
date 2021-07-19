import { Field, InputType } from "type-graphql";

@InputType()
export class DeletePostArgs {
  @Field(() => String)
  postId: string;
}
