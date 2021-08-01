import { Field, InputType } from "type-graphql";

@InputType()
export class LikeUnlikePostCommentArgs {
  @Field(() => String)
  commentId: string;
}
