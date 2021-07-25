import { Field, InputType } from "type-graphql";

@InputType()
export class DeletePostCommentArgs {
  @Field(() => String, {
    nullable: false,
  })
  commentId!: string;
}
