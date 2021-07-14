import { Field, InputType } from "type-graphql";

@InputType()
export class CreateTaskBoardArgs {
  @Field(() => String)
  title!: string;

  @Field(() => String)
  description!: string;

  @Field(() => String)
  projectId!: string;
}
