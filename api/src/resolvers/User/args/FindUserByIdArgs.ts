import { Field, InputType } from "type-graphql";

@InputType()
export class FindUserByIdArgs {
  @Field()
  id: string;
}
