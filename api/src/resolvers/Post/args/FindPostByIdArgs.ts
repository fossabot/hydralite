import { Field, InputType } from "type-graphql";

@InputType()
export class FindPostByIdArgs {
  @Field(() => String, { nullable: false })
  postId!: string;

  @Field(() => String, { nullable: false })
  projectId!: string;
}
