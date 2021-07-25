import { PassportGenericUser } from "../types/PassportGenericUser.type";
import { OAuthStrategy, StrategyInfo } from "./Strategy";

async function getUser(code: string, oauthInfo: StrategyInfo): Promise<PassportGenericUser | null> {
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

function getAuthUrl(oauthInfo: StrategyInfo) {
  // TODO: return an redirect URI for discord oauth
  return '';
}

export const DiscordOAuth = OAuthStrategy('discord', getAuthUrl, getUser);
