import { Field, InputType } from "type-graphql";

@InputType()
export class LikeUnlikePostArgs {
  @Field(() => String, { nullable: true })
  postId!: string;
}
