import { Field, InputType } from "type-graphql";

@InputType()
export class DeletePostLabelArgs {
  @Field()
  labelId: string;

  @Field()
  projectId: string;
}
