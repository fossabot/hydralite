import { Field, InputType } from "type-graphql";

@InputType()
export class FindPostCommentsInMassArgs {
  @Field(() => String, {
    nullable: false,
  })
  postId!: string;
}
