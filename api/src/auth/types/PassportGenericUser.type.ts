import { AuthProviderType } from "~/types/AuthProvider.type";

export interface PassportGenericUser {
  email?: string;
  profile: Profile;
  username: string;
  primaryOauthConnection: PrimaryOauthConnection;
}

interface Profile {
  avatarUrl: string;
  bio?: string;
}

interface PrimaryOauthConnection {
  oauthService: AuthProviderType;
  email: string;
  username: string;
  oauthServiceUserId: string;
}
