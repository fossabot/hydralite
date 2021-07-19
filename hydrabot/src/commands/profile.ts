import {
  ApplicationCommandOptionType,
  CommandInteractionController,
} from '@duxcore/interactive-discord';
import { Client, MessageEmbed } from 'discord.js';
import { getData } from '../data';
import { Command } from '../types';

function formatDate(date: Date) {
  if (!date) return '';

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

export default {
  name: 'profile',
  description: 'Show an profile',
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
    const username = interaction.options
      ? (await client.users.fetch(interaction.options[0].value)).username
      : interaction.member?.user.username;

    const user = getData(username || '');

    const error = false;
    if (error) {
      const embed = new MessageEmbed()
        .setTitle('User not found')
        .setDescription(`There is no user with the name \`${username}\` `)
        .setColor(16720418);
      interaction.respond({ embeds: [embed] });
      return;
    }

    const embed = new MessageEmbed()
      .setTitle(`${username}\'s profile on hydralite`)
      .setDescription(
        `**${username}** account was created at \`${formatDate(
          user.createdAt
        )}\``
      )
      .addFields([
        {
          name: 'Projects',
          value: `
              **${username}** ownes \`${user.ownedProjects}\` projects
              **${username}** is a member of \`${user.allProjects}\` projects

              **${username}** likes \`${user.likedProjects}\` projects
              **${username}** follows \`${user.followedProjects}\` projects
              `,
        },
        {
          name: 'Social',
          value: `
              **${username}** is followed by \`${user.followers}\` users
              **${username}** follows \`${user.following}\` users

              **${username}** has \`${user.posts}\` posts
              **${username}** likes \`${user.likedPosts}\` posts
              `,
        },
      ])
      .setColor(2293538);

    interaction.respond({ embeds: [embed] });
  },
} as Command;
