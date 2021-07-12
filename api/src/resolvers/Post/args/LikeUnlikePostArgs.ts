import { Field, InputType } from "type-graphql";

@InputType()
export class LikeUnlikePostArgs {
  @Field(() => String, { nullable: false })
  postId!: string;
}
