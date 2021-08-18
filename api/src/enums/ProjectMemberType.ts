import { registerEnums } from "decotix";
import { registerEnumType } from "type-graphql";

export enum ProjectMemberType {
  projectTeam = "projectTeam",
  moderator = "moderator",
  communityMember = "communityMember",
}

registerEnums({ ProjectMemberType });
registerEnumType(ProjectMemberType, { name: "ProjectMemberType" });
