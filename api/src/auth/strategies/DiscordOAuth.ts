import { Router } from 'express';
import { Strategy } from 'passport-discord';
import { PassportStatic } from 'passport';
import fetchOauthClientInfo from '~/auth/util/fetchOauthClientInfo';
import { PassportGenericUser } from '../types/PassportGenericUser.type';
import { PassportDiscordProfile } from '../types/PassportDiscordProfile.type';
import discordAvatarUrl from '../util/discordAvatarUrl';

export const DiscordOAuth = (passport: PassportStatic) => {
  const oauthInfo = fetchOauthClientInfo('discord');

  passport.use(
    new Strategy(
      {
        clientID: oauthInfo.clientId,
        clientSecret: oauthInfo.clientSecret,
        callbackURL: oauthInfo.cbUrl!,
        scope: ['email', 'identify'],
      },
      async (
        _: string,
        __: string,
        profile: PassportDiscordProfile,
        done: any
      ) => {
        const genericUser: PassportGenericUser = {
          email: profile.email || '',
          username: `${profile.username}#${profile.discriminator}`, // TASK: Randomize usernames for each provider
          profile: {
            avatarUrl: discordAvatarUrl(
              profile.id,
              profile.discriminator,
              profile.avatar
            ),
          },
          primaryOauthConnection: {
            email: profile.email || '',
            oauthService: 'discord',
            username: `${profile.username}#${profile.discriminator}`,
            oauthServiceUserId: profile.id,
          },
        };

        return done(null, genericUser);
      }
    )
  );

  const router = Router();

  router.get(
    '/',
    passport.authenticate('discord', {
      failureRedirect: `/`,
      session: true,
    })
  );

  router.get(
    '/cb',
    passport.authenticate('discord', {
      failureRedirect: `/`,
      session: true,
    }),
    (_, res) => {
      // TASK: redirect to main site
      res.redirect('/');
    }
  );

  return router;
};
