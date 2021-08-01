/**
 * A Passport Discord User Profile.
 **/
export interface PassportDiscordProfile {
  /** User Identifier */
  id: string;
  /** Name Of The User */
  username: string;
  /** User Avatar / Profile Picture URL */
  avatar: string;
  /** Discriminator */
  discriminator: number;
  /** Public Flags */
  public_flags: number;
  /** Flags */
  flags: number;
  /** Location */
  locale: string;
  /** Multi-Factor Auth Enabled */
  mfa_enabled: boolean;
  /** Premium Type */
  premium_type: number;
  /** User Email ID */
  email: string;
  /** Whether The User Is Verified Or Not (On Discord). */
  verified: boolean;
  /** Provider */
  provider: string;
  /** User Access Token */
  accessToken: string;
  /** Fetched Date */
  fetchedAt: Date;
}
