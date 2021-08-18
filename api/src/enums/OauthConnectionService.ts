import { registerEnums } from "decotix";
import { registerEnumType } from "type-graphql";

export enum OauthConnectionService {
  github = "github",
  google = "google",
  discord = "discord",
  twitter = "twitter",
}

registerEnums({ OauthConnectionService });
registerEnumType(OauthConnectionService, {
  name: "OauthConnectionService",
});
