import { Field, InputType } from "type-graphql";

@InputType()
export class FollowUnfollowProjectArgs {
  @Field()
  projectId: string;
}
