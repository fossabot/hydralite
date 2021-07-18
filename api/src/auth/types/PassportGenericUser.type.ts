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
  oauthService: 'discord' | 'github' | 'twitter' | 'google';
  email: string;
  username: string;
  oauthServiceUserId: string;
}
