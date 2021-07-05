require('dotenv').config();

import * as Discord from 'discord.js';
import { Command } from './types';

import profile from './commands/profile';
import balance from './commands/balance';
const client = new Discord.Client();

const commands = new Map<string, Command>();
commands.set(profile.name, profile);
commands.set(balance.name, balance);


client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interaction', async interaction => {
	console.log(interaction);
});

(client as any).ws.on('INTERACTION_CREATE', async interaction => {
    let name = interaction.data.name;
    if (!commands.has(name)) return respondInteraction(interaction, {type: 4, data: {content: 'Couldn\'t find command!'}});
    commands.get(name).execute(client, interaction, (data) => respondInteraction(interaction, data));
});

function respondInteraction(interaction, data) {
    return (client as any).api.interactions(interaction.id, interaction.token).callback.post({data});
}

function createCommand(guild: Discord.Guild, command: Command) {
    (client as any).api.applications(process.env.CLIENT_ID).guilds(guild.id).commands.post({data: {
        name: command.name,
        description: command.description,
        options: command.args
    }});
}

function Initialize(guild: Discord.Guild) {
    for (const cmd of commands.values()) createCommand(guild, cmd);
}

client.on('message', async msg => {
    if (msg.content.startsWith('!init')) {
        if (!msg.guild) return;
        console.log('Initializing');
        Initialize(msg.guild);
        console.log('Initialized');
    }
});

client.login(process.env.TOKEN);