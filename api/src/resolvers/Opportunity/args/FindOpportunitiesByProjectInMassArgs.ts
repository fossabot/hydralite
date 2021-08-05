import { Field, InputType } from "type-graphql";

@InputType()
export class FindOpportunitiesByProjectInMassArgs {
  @Field({ nullable: true })
  limit?: number;

  @Field({ nullable: true })
  skip?: number;

  @Field()
  projectId: string;
}
