import { RequestHandler, Router } from "express";
import fetchOauthClientInfo from "~/auth/util/fetchOauthClientInfo";
import { PassportGenericUser } from "../types/PassportGenericUser.type";
import UserRepo from "~/db/UserRepo";
import { TokenPairUtil } from "../token/util/TokenPair";
import { AuthProviderType } from "~/types/AuthProvider.type";

export type StrategyInfo = {
  clientId: string;
  clientSecret: string;
  cbUrl?: string | undefined;
};

export type GetAuthUrlFunction = (oauthInfo: StrategyInfo) => string;
export type GetUserFunction = (
  code: string,
  oauthInfo: StrategyInfo
) => Promise<PassportGenericUser | null>;

export const OAuthStrategy = (
  strategy: AuthProviderType,
  getAuthUrl: GetAuthUrlFunction,
  getUser: GetUserFunction
) => {
  const oauthInfo = fetchOauthClientInfo(strategy);
  const standaloneOauthInfo = fetchOauthClientInfo(`standalone/${strategy}`);

  const userRepo = new UserRepo();
  const tokens = new TokenPairUtil();

  function AuthenticateHandler(oauthInfo: StrategyInfo): RequestHandler {
    return async (req, res) => {
      try {
        const code = req.query.code;
        if (!code) throw new Error("Missing code");

        const user = await getUser(code as string, oauthInfo);
        if (!user) throw new Error("Error couldn't find User");

        const dbUser = await userRepo.findOrCreateUser(
          user.primaryOauthConnection.oauthService,
          user
        );

        const tokenPair = await tokens.generateTokenPair(dbUser.id);
        res.json(tokenPair);
      } catch (error) {
        res.json({ error: error.message });
      }
    };
  }

  function AuthUrlHandler(oauthInfo: StrategyInfo): RequestHandler {
    return async (_, res) => {
      res.json({
        url: getAuthUrl(oauthInfo),
      });
    };
  }

  const router = Router();
  router.get("/", AuthUrlHandler(oauthInfo));
  router.post("/", AuthenticateHandler(oauthInfo));

  router.get("/standalone", (_, res) => {
    res.redirect(getAuthUrl(standaloneOauthInfo));
  });
  router.get("/standalone/callback", AuthenticateHandler(standaloneOauthInfo));

  return router;
};
