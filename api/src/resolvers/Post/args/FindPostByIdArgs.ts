import { Field, InputType } from "type-graphql";

@InputType()
export class FindPostByIdArgs {
  @Field(() => String, { nullable: false })
  postId!: string;
}
