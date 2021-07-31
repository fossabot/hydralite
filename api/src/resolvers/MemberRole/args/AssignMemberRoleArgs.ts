import { Field, InputType } from "type-graphql";

@InputType()
export class AssignMemberRoleArgs {
  @Field()
  memberId: string;

  @Field()
  projectId: string;

  @Field()
  roleId: string;
}
