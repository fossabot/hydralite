import { Field, InputType } from "type-graphql";

@InputType()
export class ReadAllPostCommentsArgs {
  @Field(() => String, {
    nullable: false,
  })
  postId!: string;
}
