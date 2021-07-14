import { Field, InputType } from "type-graphql";

@InputType()
export class CreateTaskLocationArgs {
  @Field()
  name!: string;

  @Field()
  projectId!: string;
}
