import { Field, InputType } from "type-graphql";

@InputType()
export class ReadAllPostCommentsArgs {
  @Field((_type) => String, {
    nullable: false,
  })
  postId!: string;
}
