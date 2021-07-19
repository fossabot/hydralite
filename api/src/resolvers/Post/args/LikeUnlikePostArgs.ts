import { Field, InputType } from 'type-graphql';

@InputType()
export class LikeUnlikePostArgs {
  @Field(() => String)
  postId: string;
}
