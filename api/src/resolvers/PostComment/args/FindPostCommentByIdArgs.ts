import { Field, InputType } from "type-graphql";

@InputType()
export class FindPostCommentByIdArgs {
  @Field(() => String, {
    nullable: false,
  })
  commentId!: string;
}
