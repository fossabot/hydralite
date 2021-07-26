import { PassportGenericUser } from "../types/PassportGenericUser.type";
import { OAuthStrategy } from "./Strategy";

/**
 * Returns user data from Google OAuth Provider.
 *
 * @remarks
 * This method is part of the `GoogleOAuth.ts` file.
 *
 * @param {string} code - OAuth code received from Google OAuth Provider.
 * @param {StrategyInfo} oAuthInfo - `StrategyInfo` object with details required for getting a user.
 *
 * @returns {Promise<PassportGenericUser | null>} - Returns a `PassportGenericUser` object if the user is found.
 *
 * @example
 * Get user info for a Google user with code `` and `StrategyInfo` object.
 * ```ts
 * getUser()
 * ```
 **/
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

/**
 * Returns a redirect URI for Google OAuth User Info.
 *
 * @remarks
 * This function is part of the `GoogleOAuth.ts` file.
 *
 * @returns {String} - Redirect URI for Google OAuth User Info.
 **/
// param -> oauthInfo: StrategyInfo
function getAuthUrl(): string {
  // TODO: return an redirect URI for google oauth
  return "";
}

export const GoogleOAuth = () => OAuthStrategy("google", getAuthUrl, getUser);
