import axios from "axios";
import { PassportGenericUser } from "../types/PassportGenericUser.type";
import { OAuthStrategy, StrategyInfo } from "./Strategy";
import QueryString from "qs";
import discordAvatarUrl from "../util/discordAvatarUrl";

async function getUser(
  code: string,
  oauthInfo: StrategyInfo
): Promise<PassportGenericUser | null> {
  const data = await axios({
    method: "POST",
    url: "https://discord.com/api/oauth2/token",

    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: QueryString.stringify({
      client_id: oauthInfo.clientId,
      client_secret: oauthInfo.clientSecret,
      redirect_uri: oauthInfo.cbUrl,
      grant_type: "authorization_code",
      code,
    }),
  })
    .then((v) => v.data)
    .catch((e) => console.log(e));

  if (!data) return null;

  const { access_token, token_type } = data;
  if (!access_token) return null;

  const json = await axios
    .get("https://discord.com/api/users/@me", {
      headers: {
        Authorization: `${token_type} ${access_token}`,
        Accept: "application/json",
      },
    })
    .then((v) => v.data);

  return {
    email: json.email || "",
    username: json.username,
    profile: {
      avatarUrl: discordAvatarUrl(json.id, json.discriminator, json.avatar),
      bio: json.bio || "",
    },
    primaryOauthConnection: {
      email: json.email || "",
      oauthService: "discord",
      username: json.username,
      oauthServiceUserId: String(json.id),
    },
  };
}

function getAuthUrl(oauthInfo: StrategyInfo) {
  const data = {
    client_id: oauthInfo.clientId,
    redirect_uri: oauthInfo.cbUrl,
    response_type: "code",
    scope: "identify email",
  };

  return `https://discord.com/api/oauth2/authorize?${QueryString.stringify(
    data
  )}`;
}

export const DiscordOAuth = OAuthStrategy("discord", getAuthUrl, getUser);
