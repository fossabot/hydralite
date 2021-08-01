import { AuthProviderType } from "~/types/AuthProvider.type";

/**
 * A generic user which is based off the Passport Authentication System.
 */
export interface PassportGenericUser {
  /**User Email ID*/
  email?: string;
  /**User Profile*/
  profile: Profile;
  /**User Name*/
  username: string;
  /**Primary OAuth Connection*/
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
