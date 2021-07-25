import { AuthProviderType } from "~/types/AuthProvider.type";

export default function fetchOauthClientInfo(provider: AuthProviderType) {
  let info: {
    clientId: string;
    clientSecret: string;
    cbUrl?: string;
  };
  switch (provider) {
    case "github":
      info = {
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      };
      break;
    case "discord":
      info = {
        clientId: process.env.DISCORD_CLIENT_ID!,
        clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      };
      break;
    case "google":
      info = {
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      };
      break;
    case "twitter":
      info = {
        clientId: process.env.TWITTER_CLIENT_ID!,
        clientSecret: process.env.TWITTER_CLIENT_SECRET!,
      };
      break;
    case "standalone/github":
      info = {
        clientId: process.env.STANDALONE_GITHUB_CLIENT_ID ?? process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.STANDALONE_GITHUB_CLIENT_SECRET ?? process.env.GITHUB_CLIENT_SECRET!,
      };
      break;
    case "standalone/discord":
      info = {
        clientId: process.env.STANDALONE_DISCORD_CLIENT_ID ?? process.env.DISCORD_CLIENT_ID!,
        clientSecret: process.env.STANDALONE_DISCORD_CLIENT_SECRET ?? process.env.DISCORD_CLIENT_SECRET!,
      };
      break;
    case "standalone/google":
      info = {
        clientId: process.env.STANDALONE_GOOGLE_CLIENT_ID ?? process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.STANDALONE_GOOGLE_CLIENT_SECRET ?? process.env.GOOGLE_CLIENT_SECRET!,
      };
      break;
    case "standalone/twitter":
      info = {
        clientId: process.env.STANDALONE_TWITTER_CLIENT_ID ?? process.env.TWITTER_CLIENT_ID!,
        clientSecret: process.env.STANDALONE_TWITTER_CLIENT_SECRET ?? process.env.TWITTER_CLIENT_SECRET!,
      };
      break;
    }

  info.cbUrl = (process.env.WEB_URL ?? 'http://localhost:3000') + `/auth/providers/${provider}`;
  if (provider.startsWith("standalone")) info.cbUrl = (process.env.API_URL ?? 'http://localhost:8000') + `/api/auth/${provider.substr('standalone/'.length)}/standalone/callback`;

  return info;
}
