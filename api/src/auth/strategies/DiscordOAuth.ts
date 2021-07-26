import { PassportGenericUser } from "../types/PassportGenericUser.type";
import { OAuthStrategy } from "./Strategy";

/**
 * Returns user data from Discord OAuth Provider.
 *
 * @remarks
 * This method is part of the `DiscordOAuth.ts` file.
 *
 * @param {string} code - OAuth code received from Discord OAuth Provider.
 * @param {StrategyInfo} oAuthInfo - `StrategyInfo` object with details required for getting a user.
 *
 * @returns {Promise<PassportGenericUser | null>} - Returns a `PassportGenericUser` object if the user is found.
 *
 * @example
 * Get user info for a Discord user with code `` and `StrategyInfo` object.
 * ```ts
 * getUser()
 * ```
 **/
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
