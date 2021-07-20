import { Field, InputType } from "type-graphql";

@InputType()
export class UpdatePostLabelArgs {
  @Field()
  id: string;

  @Field()
  title?: string;

  @Field()
  color?: string;

  @Field({ nullable: true })
  description?: string;
}
