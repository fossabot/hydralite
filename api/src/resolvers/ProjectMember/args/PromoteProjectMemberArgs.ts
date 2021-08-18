import { Field, InputType } from "type-graphql";
import { ProjectMemberType } from "~/enums/index"";

@InputType()
export class PromoteProjectMemberArgs {
  @Field()
  memberId: string;

  @Field()
  newRole: ProjectMemberType;
}
