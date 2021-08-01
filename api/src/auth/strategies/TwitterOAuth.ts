import { PassportGenericUser } from "../types/PassportGenericUser.type";
import { OAuthStrategy } from "./Strategy";

/**
 * Returns user data from Twitter OAuth Provider.
 *
 * @remarks
 * This method is part of the `TwitterOAuth.ts` file.
 *
 * @param {string} code - OAuth code received from Twitter OAuth Provider.
 * @param {StrategyInfo} oAuthInfo - `StrategyInfo` object with details required for getting a user.
 *
 * @returns {Promise<PassportGenericUser | null>} - Returns a `PassportGenericUser` object if the user is found.
 *
 * @example
 * Get user info for a Twitter user with code `` and `StrategyInfo` object.
 * ```ts
 * getUser()
 * ```
 **/
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
      oauthService: "twitter",
      username: "",
      oauthServiceUserId: "",
    },
  };
}

/**
 * Returns a redirect URI for Twitter OAuth User Info.
 *
 * @remarks
 * This function is part of the `TwitterOAuth.ts` file.
 *
 * @returns {String} - Redirect URI for Twitter OAuth User Info.
 **/
// todo:  impl with param -> oauthInfo: StrategyInfo
function getAuthUrl() {
  // TODO: return an redirect URI for twitter oauth
  return "";
}

export const TwitterOAuth = OAuthStrategy("twitter", getAuthUrl, getUser);
