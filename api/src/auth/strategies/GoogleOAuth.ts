import { PassportGenericUser } from "../types/PassportGenericUser.type";
import { OAuthStrategy, StrategyInfo } from "./Strategy";

async function getUser(): Promise<PassportGenericUser | null> {
  // code: string, oauthInfo: StrategyInfo
  // TODO: get user data from google
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

// param -> oauthInfo: StrategyInfo
function getAuthUrl() {
  // TODO: return an redirect URI for google oauth
  return "";
}

export const GoogleOAuth = () => OAuthStrategy("google", getAuthUrl, getUser);
