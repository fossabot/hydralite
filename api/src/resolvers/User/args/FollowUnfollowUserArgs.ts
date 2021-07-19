import { Field, InputType } from "type-graphql";

@InputType()
export class FollowUnfollowUserArgs {
  @Field()
  userId: string;
}
