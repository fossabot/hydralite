import { Field, InputType } from "type-graphql";

@InputType()
export class DeleteProjectArgs {
  @Field()
  projectId: string;

  @Field()
  name: string;
}
