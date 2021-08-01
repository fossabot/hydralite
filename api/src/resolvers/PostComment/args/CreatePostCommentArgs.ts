import { Field, InputType } from "type-graphql";

@InputType()
export class CreatePostCommentArgs {
  @Field(() => String, {
    nullable: false,
  })
  body!: string;

  @Field(() => String, {
    nullable: false,
  })
  postId!: string;
}
