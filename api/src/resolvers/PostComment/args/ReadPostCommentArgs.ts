import { Field, InputType } from "type-graphql";

@InputType()
export class ReadPostCommentArgs {
  @Field((_type) => String, {
    nullable: false,
  })
  commentId!: string;
}
