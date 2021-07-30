import { Field, InputType } from "type-graphql";

@InputType()
export class ReadPostCommentArgs {
  @Field(() => String, {
    nullable: false,
  })
  commentId!: string;
}
