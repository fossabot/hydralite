import { registerEnums } from "decotix";
import { registerEnumType } from "type-graphql";

export enum AttachmentType {
  image,
  video,
  other,
}

registerEnums({ AttachmentType });
registerEnumType(AttachmentType, {
  name: "AttachmentType",
});
