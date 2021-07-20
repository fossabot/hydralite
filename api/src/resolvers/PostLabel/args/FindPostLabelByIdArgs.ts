import { Field, InputType } from "type-graphql";

@InputType()
export class FindPostLabelByIdArgs {
  @Field()
  labelId: string;
}
