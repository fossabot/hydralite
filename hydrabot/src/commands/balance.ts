import { Client, MessageEmbed } from 'discord.js';
import { getData } from '../data';
import { Command } from '../types';
import {
  ApplicationCommandOptionType,
  CommandInteractionController,
} from '@duxcore/interactive-discord';

export default {
  name: 'balance',
  description: 'Show the balance of an user',
  options: [
    {
      name: 'user',
      description: 'The user to get',
      type: ApplicationCommandOptionType.USER,
      required: true,
    },
  ],
  execute: async (
    client: Client,
    interaction: CommandInteractionController
  ) => {
    let error = false;

    const username = interaction.options
      ? (await client.users.fetch(interaction.options[0].value)).username
      : interaction.member?.user.username;

    const user = getData(username || '');

    if (error) {
      const embed = new MessageEmbed()
        .setTitle('User not found')
        .setDescription(`There is no user with the name \`${username}\` `)
        .setColor(16720418);
      interaction.respond({ embeds: [embed] });
      return;
    }

    const embed = new MessageEmbed()
      .setTitle(`${username}'s balance`)
      .setDescription(`**${username}** has \`${user.hydra}\` hydra`)
      .setColor(2293538);
    interaction.respond({ embeds: [embed] });
  },
} as Command;
