import { Field, InputType } from "type-graphql";

@InputType()
export class FindManyPostLabelsArgs {
  @Field()
  projectId: string;
}
