import { Field, InputType } from "type-graphql";
import { MemberPerms } from "~/types/MemberPerms.type";

@InputType()
export class CreateMemberRoleArgs {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  projectId: string;

  @Field(() => [String])
  perms?: MemberPerms[];
}
