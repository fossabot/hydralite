require('dotenv').config();

import { Bot } from './classes/bot';
const client = new Bot();

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
  client.registerCommands(process.env.GUILD_ID || '');
});

client.interactions.on('commandInteraction', (interaction) => {
  console.log(client.commands);

  if (client.commands) {
    if (!client.commands.has(interaction.name))
      return interaction.respond({
        content: "Couldn't find command!",
        isPrivate: true,
      });
    client.commands.get(interaction.name)?.execute(client, interaction);
  }
});

client.login(process.env.TOKEN);
