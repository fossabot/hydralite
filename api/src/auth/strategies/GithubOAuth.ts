import { Router } from "express";
import fetchOauthClientInfo from "~/auth/util/fetchOauthClientInfo";
import QueryString from "qs";
import axios from "axios";
import { PassportGenericUser } from "../types/PassportGenericUser.type";
import UserRepo from "~/db/UserRepo";
import { TokenPairUtil } from "../token/util/TokenPair";

export const GithubOAuth = (tokens: TokenPairUtil) => {
  const oauthInfo = fetchOauthClientInfo("github");
  const userRepo = new UserRepo();
  
  const router = Router();
  router.get(
    "/",
    (_, res) => {
      const data = {
        client_id: oauthInfo.clientId,
        redirect_uri: oauthInfo.cbUrl,
      };

      res.json({
        url: `https://github.com/login/oauth/authorize?${QueryString.stringify(data)}`
      });
    }
  );


  router.post(
    "/",
    async (req, res) => {
      try {
        const code = req.query.code;
        if (!code) throw new Error("Missing code");

        const data = await axios({
          method: 'POST',
          url: 'https://github.com/login/oauth/access_token',

          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          data: {
            client_id: oauthInfo.clientId,
            client_secret: oauthInfo.clientSecret,
            code,
          }
        }).then(v => v.data);

        const { access_token, token_type } = data;
        if (!access_token) throw new Error("Missing access_token");

        const json = await axios.get('https://api.github.com/user', {
          headers: {
            'Authorization': `${token_type} ${access_token}`,
            'Accept': 'application/json',
          }
        }).then(v => v.data);

        const user: PassportGenericUser = {
          email: json.email || "",
          username: json.login,
          profile: {
            avatarUrl: json.avatar_url,
            bio: json.bio || "",
          },
          primaryOauthConnection: {
            email: json.email || "",
            oauthService: "github",
            username: json.login,
            oauthServiceUserId: String(json.id),
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
