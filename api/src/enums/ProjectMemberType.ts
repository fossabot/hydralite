import { registerEnums } from "decotix";
import { registerEnumType } from "type-graphql";

export enum ProjectMemberType {
  projectTeam,
  moderator,
  communityMember,
}

registerEnums({ ProjectMemberType });
registerEnumType(ProjectMemberType, { name: "ProjectMemberType" });
