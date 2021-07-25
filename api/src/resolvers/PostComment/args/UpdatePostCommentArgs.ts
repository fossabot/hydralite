import { Field, InputType } from "type-graphql";

@InputType()
export class UpdatePostCommentArgs {
  @Field(() => String, {
    nullable: false,
  })
  body!: string;

  @Field(() => String, {
    nullable: false,
  })
  commentId!: string;
}
