require('dotenv').config();

import * as Discord from 'discord.js';
import { Command } from './types';

import profile from './commands/profile';
import balance from './commands/balance';
import { Bot } from './classes/bot';
const client = new Bot();


client.commands.set(profile.name, profile);
client.commands.set(balance.name, balance);


client.on('ready', () => {
    console.log(`Logged in as ${client.user?.tag}!`);
});


client.interactions.on("commandInteraction", (interaction) => {
    if (client.commands) {
        if (!client.commands.has(interaction.name)) return interaction.respond({ content: "Couldn't find command!", isPrivate: true })
        client.commands.get(interaction.name)?.execute(client, interaction, (data) => respondInteraction(interaction, data))
    }
})

function respondInteraction(interaction, data) {
    return (client as any).api.interactions(interaction.id, interaction.token).callback.post({ data });
}

function createCommand(guild: Discord.Guild, command: Command) {
    (client as any).api.applications(process.env.CLIENT_ID).guilds(guild.id).commands.post({
        data: {
            name: command.name,
            description: command.description,
            options: command.args
        }
    });
}

function Initialize(guild: Discord.Guild) {
    for (const cmd of client.commands.values()) createCommand(guild, cmd);
}

client.on('message', async msg => {
    if (msg.content == '!init') {
        if (!msg.guild) return;
        Initialize(msg.guild);
    }
});

client.login(process.env.TOKEN);