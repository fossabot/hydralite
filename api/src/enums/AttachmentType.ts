import { registerEnums } from "decotix";
import { registerEnumType } from "type-graphql";

export enum AttachmentType {
  image = "image",
  video = "video",
  other = "other",
}

registerEnums({ AttachmentType });
registerEnumType(AttachmentType, {
  name: "AttachmentType",
});
