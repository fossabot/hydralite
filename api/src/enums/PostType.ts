import { registerEnums } from "decotix";
import { registerEnumType } from "type-graphql";

export enum PostType {
  post = "post",
  article = "article",
  question = "question",
  feedback = "feedback",
  suggestion = "suggestion",
  appreciation = "appreciation",
}

registerEnums({ PostType });
registerEnumType(PostType, { name: "PostType" });
