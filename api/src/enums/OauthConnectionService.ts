import { registerEnums } from "decotix";
import { registerEnumType } from "type-graphql";

export enum OauthConnectionService {
  github,
  google,
  discord,
  twitter,
}

registerEnums({ OauthConnectionService });
registerEnumType(OauthConnectionService, {
  name: "OauthConnectionService",
});
