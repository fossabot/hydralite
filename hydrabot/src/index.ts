require("dotenv").config();

import { Bot } from "./classes/bot";
import { init, sendRoles } from "./roles";
import { servers } from "./servers";

const client = new Bot();

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
  init(client);

  for (const server of servers) {
    client.registerCommands(server.id);
    sendRoles(server.id, server.channels.roles);
  }
});

client.interactions.on("commandInteraction", (interaction) => {
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

process.on("unhandledRejection", (reason, p) => {
  console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
});
