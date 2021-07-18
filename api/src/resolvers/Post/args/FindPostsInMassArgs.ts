import { Field, InputType } from 'type-graphql';

@InputType()
export class FindPostsInMassArgs {
  @Field({ nullable: true })
  projectId?: string;

  @Field({ nullable: true })
  limit?: number;

  @Field({ nullable: true })
  skip?: number;
}
