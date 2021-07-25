import { Router } from "express";
import fetchOauthClientInfo from "~/auth/util/fetchOauthClientInfo";
import { PassportGenericUser } from "../types/PassportGenericUser.type";
import UserRepo from "~/db/UserRepo";
import { TokenPairUtil } from "../token/util/TokenPair";

export const GoogleOAuth = (tokens: TokenPairUtil) => {
  const oauthInfo = fetchOauthClientInfo("google");
  const userRepo = new UserRepo();
  
  const router = Router();
  router.get(
    "/",
    (_, res) => {
      // TODO: respond with the oauth url

      res.json({
        url: ``
      });
    }
  );


  router.post(
    "/",
    async (req, res) => {
      try {
        // TODO: get user info from google by using the code provided by "req.query.code"

        const user: PassportGenericUser = {
          email: "",
          username: "",
          profile: {
            avatarUrl: "",
            bio: "",
          },
          primaryOauthConnection: {
            email: "",
            oauthService: "google",
            username: "",
            oauthServiceUserId: "",
          },
        };

        const dbUser = await userRepo.findOrCreateUser(
          user.primaryOauthConnection.oauthService,
          user
        );

        const tokenPair = await tokens.generateTokenPair(dbUser.id);
        res.json(tokenPair);
      } catch (error) {
        res.json({ error: error.message });
      }
    }
  );

  return router;
};