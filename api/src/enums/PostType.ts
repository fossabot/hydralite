import { registerEnums } from "decotix";
import { registerEnumType } from "type-graphql";

export enum PostType {
  post,
  article,
  question,
  feedback,
  suggestion,
  appreciation,
}

registerEnums({ PostType });
registerEnumType(PostType, { name: "PostType" });
