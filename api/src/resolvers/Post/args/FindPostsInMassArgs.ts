import { Field, InputType } from "type-graphql";

@InputType()
export class FindPostsInMassArgs {
  @Field()
  projectId?: string;

  @Field()
  limit?: number;

  @Field()
  skip?: number;
}
