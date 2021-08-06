import { Min } from "class-validator";
import { Field, InputType, Int } from "type-graphql";

@InputType()
export class FindUsersInMassArgs {
  @Field(() => Int, { nullable: true })
  @Min(0)
  skip?: number;

  @Field(() => Int, { nullable: true })
  @Min(0)
  limit?: number;
}
