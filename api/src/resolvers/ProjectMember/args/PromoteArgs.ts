import { ProjectMemberType } from "@prisma/client";
import { Field, InputType } from "type-graphql";

@InputType()
export class PromoteArgs {
  @Field()
  memberId: string;

  @Field()
  newRole: ProjectMemberType;
}
