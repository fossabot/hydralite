import { Field, InputType } from "type-graphql";

@InputType()
export class JoinProjectArgs {
  @Field()
  projectId: string;
}
