import { Field, InputType } from "type-graphql";

@InputType()
export class CreateProjectArgs {
  @Field()
  title: string;

  @Field()
  description?: string;

  @Field({ nullable: true })
  logoUrl?: string;

  @Field({ nullable: true })
  bannerUrl?: string;
}
