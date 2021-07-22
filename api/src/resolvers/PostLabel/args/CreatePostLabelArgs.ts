import { Field, InputType } from "type-graphql";

@InputType()
export class CreatePostLabelArgs {
  @Field()
  title: string;

  @Field()
  color: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  projectId: string;
}
