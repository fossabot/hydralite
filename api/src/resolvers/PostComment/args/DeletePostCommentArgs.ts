import { Field, InputType } from "type-graphql";

@InputType()
export class DeletePostCommentArgs {
  @Field((_type) => String, {
    nullable: false,
  })
  commentId!: string;
}
