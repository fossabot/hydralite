import { Field, InputType } from "type-graphql";
import { ProjectMemberType } from "~/resolver-types/enums";

@InputType()
export class PromoteProjectMemberArgs {
  @Field()
  memberId: string;

  @Field()
  newRole: ProjectMemberType;
}
