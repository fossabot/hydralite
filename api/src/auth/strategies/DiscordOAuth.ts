import { PassportGenericUser } from "../types/PassportGenericUser.type";
import { OAuthStrategy, StrategyInfo } from "./Strategy";

async function getUser(): Promise<PassportGenericUser | null> {
  // code: string, oauthInfo: StrategyInfo
  // TODO: get user data from discord
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
  // TODO: return an redirect URI for discord oauth
  return "";
}

export const DiscordOAuth = OAuthStrategy("discord", getAuthUrl, getUser);
