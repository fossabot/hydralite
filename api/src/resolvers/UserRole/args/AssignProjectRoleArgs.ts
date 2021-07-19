import { Field, InputType } from "type-graphql";

@InputType()
export class AssignProjectRoleArgs {
  @Field()
  memberId: string;

  @Field()
  projectId: string;

  @Field()
  roleId: string;
}
