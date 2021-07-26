/**
 * A Passport GitHub User Profile.
 **/
export interface PassportGithubProfile {
  /** User Identifier */
  id: string;
  /** Node ID */
  nodeId: string;
  /** Full User Name */
  displayName: string;
  /** Username */
  username: string;
  /** Profile Picture URL */
  profileUrl: string;
  /** Photos */
  photos: Photo[];
  /** Provider */
  provider: string;
  _raw: string;
  _json: JSON;
}

/**
 * A JSON Interface For A GitHub User Profile (GitHub API Response).
 **/
interface JSON {
  /** Github Login */
  login: string;
  /** Github ID */
  id: number;
  /** Node Identifier */
  node_id: string;
  /** Avatar URL */
  avatar_url: string;
  /** Gravatar ID */
  gravatar_id: string;
  /** User URL */
  url: string;
  /** HTML URL */
  html_url: string;
  /** Followers URL */
  followers_url: string;
  /** Following URL */
  following_url: string;
  /** GitHub Gist URL */
  gists_url: string;
  /** Starred URL */
  starred_url: string;
  /** Subscriptions URL */
  subscriptions_url: string;
  /** Organizations URL */
  organizations_url: string;
  /** Repositories URL */
  repos_url: string;
  /** Events URL */
  events_url: string;
  /** Recieved Events URL */
  received_events_url: string;
  /** Type */
  type: string;
  /** Site Administrator */
  site_admin: boolean;
  /** Name Of User */
  name: string;
  /** User Company */
  company: null;
  /** User Blog URL */
  blog: string;
  /** User Location */
  location: string;
  /** User Email ID */
  email?: string;
  /** Whether The User Is Hireable Or Not */
  hireable: null;
  /** User Bio */
  bio: string;
  /** Twitter Username */
  twitter_username: string;
  /** Number Of Public Repository */
  public_repos: number;
  /** Number Of Public Gists */
  public_gists: number;
  /** Number Of Followers */
  followers: number;
  /** Number Of People The User's Following */
  following: number;
  /** When The User Signed Up To Github */
  created_at: Date;
  /** When The User Updated Their Github Profile */
  updated_at: Date;
}

/**
 * A Photo Interface For A GitHub User Profile (Stores URL's To User Images).
 **/
interface Photo {
  /** Photo URL */
  value: string;
}
