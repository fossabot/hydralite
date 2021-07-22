import { ProjectMemberType } from "@prisma/client";
import { Field, InputType } from "type-graphql";

@InputType()
export class PromoteArgs {
  @Field()
  projectId: string;

  @Field()
  memberId: string;

  @Field()
  newRole: ProjectMemberType;
}
