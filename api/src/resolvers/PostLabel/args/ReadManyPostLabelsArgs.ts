import { Field, InputType } from "type-graphql";

@InputType()
export class ReadManyPostLabelsArgs {
  @Field()
  projectId: string;
}
