import { Router } from "express";
import { Strategy } from "passport-twitter";
import { PassportStatic } from "passport";
import fetchOauthClientInfo from "~/auth/util/fetchOauthClientInfo";
import { PassportGenericUser } from "../types/PassportGenericUser.type";
import { PassportTwitterProfile } from "../types/PassportTwitterProfile.type";
import { Server } from "src/Server";

export const TwitterOAuth = (passport: PassportStatic) => {
  const oauthInfo = fetchOauthClientInfo("twitter");

  passport.use(
    new Strategy(
      {
        consumerKey: oauthInfo.clientId,
        consumerSecret: oauthInfo.clientSecret,
        callbackURL: oauthInfo.cbUrl!,
      },
      async (
        _: string,
        __: string,
        profile: PassportTwitterProfile,
        done: any
      ) => {
        const genericUser: PassportGenericUser = {
          email: "",
          username: profile.username,
          profile: {
            avatarUrl: profile._json.profile_image_url_https,
          },
          primaryOauthConnection: {
            email: "",
            oauthService: "twitter",
            username: profile.username,
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
    passport.authenticate("twitter", {
      failureRedirect: `/`,
      session: true,
    })
  );

  router.get(
    "/cb",
    passport.authenticate("twitter", {
      failureRedirect: `/`,
      session: true,
    }),
    (_, res) => {
      res.redirect("/");
    }
  );

  return router;
};
