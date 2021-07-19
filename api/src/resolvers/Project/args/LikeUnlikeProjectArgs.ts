import { Field, InputType } from "type-graphql";

@InputType()
export class LikeUnlikeProjectArgs {
  @Field()
  projectId: string;
}
