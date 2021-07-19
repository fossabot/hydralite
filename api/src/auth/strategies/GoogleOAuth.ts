import { Router } from "express";
import { Strategy } from "passport-google-oauth20";
import { PassportStatic } from "passport";
import fetchOauthClientInfo from "~/auth/util/fetchOauthClientInfo";
import { PassportGenericUser } from "../types/PassportGenericUser.type";
import { PassportGoogleProfile } from "../types/PassportGoogleProfile.type";

export const GoogleOAuth = (passport: PassportStatic) => {
  const oauthInfo = fetchOauthClientInfo("google");

  passport.use(
    new Strategy(
      // @ts-ignore Something wrong with the typings.
      {
        clientID: oauthInfo.clientId,
        clientSecret: oauthInfo.clientSecret,
        callbackURL: oauthInfo.cbUrl!,
        scope: [
          "https://www.googleapis.com/auth/userinfo.email",
          "https://www.googleapis.com/auth/userinfo.profile",
        ],
      },
      async (
        _: string,
        __: string,
        profile: PassportGoogleProfile,
        done: any
      ) => {
        const genericUser: PassportGenericUser = {
          email: profile._json.email,
          username: profile.displayName,
          profile: {
            avatarUrl: profile._json.picture,
          },
          primaryOauthConnection: {
            email: profile._json.email,
            oauthService: "google",
            username: profile.displayName,
            oauthServiceUserId: profile.id,
          },
        };

        return done(null, genericUser);
      }
    )
  );

  const router = Router();

  router.get(
    "/",
    passport.authenticate("google", {
      failureRedirect: `/`,
      session: true,
    })
  );

  router.get(
    "/cb",
    passport.authenticate("google", {
      failureRedirect: `/`,
      session: true,
    }),
    (_, res) => {
      res.redirect("/");
    }
  );

  return router;
};
