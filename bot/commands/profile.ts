import * as Discord from 'discord.js';
import { Command } from '../types';

export default {
    name: 'profile',
    description: 'Show an profile',
    args: [
        {
            name: 'user',
            description: 'The user to get',
            type: 3,
            required: true
        }
    ],
    execute: async (bot: Discord.Client, command: any, callback: Function) => {
        const name = command.data.options.find(v => v.name == 'user').value;

        const error = false;
        if (error) {
            callback({type: 4, data: {
                content: null,
                embeds: [
                    {
                        title: 'User not found',
                        description: `There is no user with name \`${name}\``,
                        color: 16720418
                    }
                ]
            }});
            return;
        }

        callback({type: 4, data: {
            content: null,
            embeds: [
              {
                title: `${name}\'s profile on hydralite`,
                description: `**${name}** account was created at \`\${createdAt}\``,
                color: 2293538,
                fields: [
                  {
                    name: 'Projects',
                    value: `
                    **${name}** ownes \`\${ownedProjects}\` projects
                    **${name}** is a member of \`\${allProjects}\` projects

                    **${name}** likes \`\${likedProjects}\` projects
                    **${name}** follows \`\${followedProjects}\` projects
                    `
                  },
                  {
                    name: 'Social',
                    value: `
                    **${name}** is followed by \`\${followers}\` users
                    **${name}** follows \`\${following}\` users

                    **${name}** has \`\${posts}\` posts
                    **${name}** likes \`\${likedPosts}\` posts
                    `
                  }
                ]
              }
            ]
        }});
    }
} as Command;