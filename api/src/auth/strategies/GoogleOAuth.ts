import { PassportGenericUser } from "../types/PassportGenericUser.type";
import { OAuthStrategy, StrategyInfo } from "./Strategy";

async function getUser(code: string, oauthInfo: StrategyInfo): Promise<PassportGenericUser | null> {
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

function getAuthUrl(oauthInfo: StrategyInfo) {
  // TODO: return an redirect URI for google oauth
  return '';
}

export const GoogleOAuth = () => OAuthStrategy('google', getAuthUrl, getUser);
