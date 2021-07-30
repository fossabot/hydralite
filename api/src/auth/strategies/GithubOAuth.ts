import axios from "axios";
import { PassportGenericUser } from "../types/PassportGenericUser.type";
import { OAuthStrategy, StrategyInfo } from "./Strategy";
import QueryString from "qs";

/**
 * Returns user data from Github OAuth Provider.
 *
 * @remarks
 * This method is part of the `GithubOAuth.ts` file.
 *
 * @param {string} code - OAuth code received from GitHub OAuth Provider.
 * @param {StrategyInfo} oAuthInfo - `StrategyInfo` object with details required for getting a user.
 *
 * @returns {Promise<PassportGenericUser | null>} - Returns a `PassportGenericUser` object if the user is found.
 *
 * @example
 * Get user info for a GitHub user with code `` and `StrategyInfo` object.
 * ```ts
 * getUser()
 * ```
 **/
async function getUser(
  code: string,
  oauthInfo: StrategyInfo
): Promise<PassportGenericUser | null> {
  const data = await axios({
    method: "POST",
    url: "https://github.com/login/oauth/access_token",

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      client_id: oauthInfo.clientId,
      client_secret: oauthInfo.clientSecret,
      code,
    },
  }).then((v) => v.data);

  const { access_token, token_type } = data;
  if (!access_token) return null;

  const json = await axios
    .get("https://api.github.com/user", {
      headers: {
        Authorization: `${token_type} ${access_token}`,
        Accept: "application/json",
      },
    })
    .then((v) => v.data);

  return {
    email: json.email || "",
    username: json.login,
    profile: {
      avatarUrl: json.avatar_url,
      bio: json.bio || "",
    },
    primaryOauthConnection: {
      email: json.email || "",
      oauthService: "github",
      username: json.login,
      oauthServiceUserId: String(json.id),
    },
  };
}

function getAuthUrl(oauthInfo: StrategyInfo) {
  const data = {
    client_id: oauthInfo.clientId,
    redirect_uri: oauthInfo.cbUrl,
  };

  return `https://github.com/login/oauth/authorize?${QueryString.stringify(
    data
  )}`;
}

export const GithubOAuth = OAuthStrategy("github", getAuthUrl, getUser);
