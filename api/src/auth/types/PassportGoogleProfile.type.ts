/**
 * A Passport Google User Profile.
 **/
export interface PassportGoogleProfile {
  /** User Identifier */
  id: string;
  /** Full User Name */
  displayName: string;
  /** Username */
  name: Name;
  /** User Emails */
  emails: Email[];
  /** Photos */
  photos: Photo[];
  /** Provider */
  provider: string;
  _raw: string;
  _json: JSON;
}

/**
 * A JSON Interface For A Google User Profile (Google API Response).
 **/
export interface JSON {
  sub: string;
  /** Username */
  name: string;
  /** Username */
  given_name: string;
  /** Family Name */
  family_name: string;
  /** Image URL */
  picture: string;
  /** Email ID */
  email: string;
  /** Whether The Email Is Verified Or Not */
  email_verified: boolean;
  /** User Locale */
  locale: string;
}

/**
 * An Email Interface For A Google User Profile (Stores Details Related To The Users's Emails).
 **/
export interface Email {
  /** Email ID */
  value: string;
  /** Whether The Email Is Verified Or Not */
  verified: boolean;
}

/**
 * A Name Interface For A Google User Profile (Stores Details Related To The Users's Identity).
 **/
export interface Name {
  /** Family Name */
  familyName: string;
  /** Given Name */
  givenName: string;
}

/**
 * A Photo Interface For A Google User Profile (Stores URL's To User Images).
 **/
export interface Photo {
  /** Photo URL */
  value: string;
}
