import { Field, InputType } from "type-graphql";

@InputType()
export class CreateTaskCategoryArgs {
  @Field()
  name!: string;

  @Field({
    nullable: true,
  })
  description?: string;

  @Field({
    nullable: true,
  })
  color: string;

  @Field(() => [String], {
    nullable: true,
  })
  linkedTaskIds: string[];

  @Field()
  projectId!: string;
}
