import { Router } from "express";
import { Strategy } from "passport-github2";
import { PassportStatic } from "passport";
import fetchOauthClientInfo from "~/auth/util/fetchOauthClientInfo";
import { PassportGithubProfile } from "../types/PassportGithubProfile.type";
import { PassportGenericUser } from "../types/PassportGenericUser.type";

export const GithubOAuth = (passport: PassportStatic) => {
  const oauthInfo = fetchOauthClientInfo("github");

  passport.use(
    new Strategy(
      {
        clientID: oauthInfo.clientId,
        clientSecret: oauthInfo.clientSecret,
        callbackURL: oauthInfo.cbUrl!,
      },
      async (
        _: string,
        __: string,
        profile: PassportGithubProfile,
        done: any
      ) => {
        const genericUser: PassportGenericUser = {
          email: profile._json.email || "",
          username: profile.username,
          profile: {
            avatarUrl: profile.photos[0].value,
            bio: profile._json.bio || "",
          },
          primaryOauthConnection: {
            email: profile._json.email || "",
            oauthService: "github",
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
    passport.authenticate("github", {
      scope: ["user:email"],
      failureRedirect: `/`,
      session: true,
    })
  );

  router.get(
    "/cb",
    passport.authenticate("github", {
      failureRedirect: `/`,
      session: true,
    }),
    (_, res) => {
      // redirect to main site
      res.redirect("/");
    }
  );

  return router;
};
