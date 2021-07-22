import { Field, InputType } from "type-graphql";

@InputType()
export class UpdatePostCommentArgs {
  @Field((_type) => String, {
    nullable: false,
  })
  body!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  commentId!: string;
}
