import * as Discord from "discord.js";
import { getData } from "../data";
import { Command } from "../types";

function formatDate(date: Date) {
  if (!date) return "";

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

export default {
  name: "profile",
  description: "Show an profile",
  args: [
    {
      name: "user",
      description: "The user to get",
      type: 3,
      required: true,
    },
  ],
  execute: async (bot: Discord.Client, command: any, callback: Function) => {
    const name = command.data.options.find((v) => v.name == "user").value;
    const user = getData(name);

    const error = false;
    if (error) {
      callback({
        type: 4,
        data: {
          content: null,
          embeds: [
            {
              title: "User not found",
              description: `There is no user with name \`${name}\``,
              color: 16720418,
            },
          ],
        },
      });
      return;
    }

    callback({
      type: 4,
      data: {
        content: null,
        embeds: [
          {
            title: `${name}\'s profile on hydralite`,
            description: `**${name}** account was created at \`${formatDate(
              user.createdAt
            )}\``,
            color: 2293538,
            fields: [
              {
                name: "Projects",
                value: `
                    **${name}** ownes \`${user.ownedProjects}\` projects
                    **${name}** is a member of \`${user.allProjects}\` projects

                    **${name}** likes \`${user.likedProjects}\` projects
                    **${name}** follows \`${user.followedProjects}\` projects
                    `,
              },
              {
                name: "Social",
                value: `
                    **${name}** is followed by \`${user.followers}\` users
                    **${name}** follows \`${user.following}\` users

                    **${name}** has \`${user.posts}\` posts
                    **${name}** likes \`${user.likedPosts}\` posts
                    `,
              },
            ],
          },
        ],
      },
    });
  },
} as Command;
