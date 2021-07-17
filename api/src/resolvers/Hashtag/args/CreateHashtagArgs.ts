import { IsAlphanumeric, Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateHashtagArgs {
  @Field()
  @Length(1, 50)
  @IsAlphanumeric()
  name: string;
}
