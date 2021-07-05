import * as Discord from 'discord.js';
import { Command } from '../types';

export default {
    name: 'balance',
    description: 'Show the balance of an user',
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
                title: `${name}'s balance`,
                description: `**${name}** has \`\${hydra}\` hydra`,
                color: 2293538
              }
            ]
        }});
    }
} as Command;