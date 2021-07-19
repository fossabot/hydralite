import { Field, InputType } from "type-graphql";

@InputType()
export class CreatePostCommentArgs {
  @Field((_type) => String, {
    nullable: false,
  })
  body!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  postId!: string;
}
