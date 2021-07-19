import { Length, IsAlphanumeric } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class FindHashtagByNameArgs {
  @Field()
  @Length(1, 50)
  @IsAlphanumeric()
  name: string;
}
