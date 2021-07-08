import { Field, InputType } from "type-graphql";

@InputType()
export class DeletePostArgs {
  @Field(() => String, { nullable: false })
  postId!: string;
}
