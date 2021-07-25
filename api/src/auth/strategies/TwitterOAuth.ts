import { PassportGenericUser } from "../types/PassportGenericUser.type";
import { OAuthStrategy } from "./Strategy";

async function getUser(): Promise<PassportGenericUser | null> {
  // code: string,
  // oauthInfo: StrategyInfo
  // TODO: get user data from twitter
  return {
    email: "",
    username: "",
    profile: {
      avatarUrl: "",
      bio: "",
    },
    primaryOauthConnection: {
      email: "",
      oauthService: "google",
      username: "",
      oauthServiceUserId: "",
    },
  };
}

// todo:  impl with param -> oauthInfo: StrategyInfo
function getAuthUrl() {
  // TODO: return an redirect URI for twitter oauth
  return "";
}

export const TwitterOAuth = OAuthStrategy("twitter", getAuthUrl, getUser);
