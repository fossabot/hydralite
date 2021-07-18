import { ButtonComponent, ButtonStyle, ComponentActionRow, ComponentCluster, Member } from '@duxcore/interactive-discord';
import { Message, TextChannel } from 'discord.js';
import { Bot } from './classes/bot';
import { servers } from './servers';

import { io } from "socket.io-client";

let client: Bot;
export function init(bot: Bot) {
    client = bot;
    client.interactions.on("buttonInteraction", async (interaction) => {
        const channel = (await client.channels.fetch(interaction.raw.channel_id)) as TextChannel;
        const server = servers.find(v => v.id == interaction.raw.guild_id);
        if (!server) return;
    
        if (interaction.raw.member == null) return;
        if (interaction.raw.message == null) return;
        if (server.roles.find(v => v.id == interaction.customId)) toogleRole(interaction.customId, interaction.raw.member, await channel.messages.fetch(interaction.raw.message?.id))
        interaction.respond({
            type: 6,
        })
    });
}



interface RoleChange {
    add: boolean;
    type: string;
    user: string;
    timeout: NodeJS.Timeout;
    message: Message;
}

async function update(message: Message) {
    const msg = await client.interactions.fetchMessage({ channel: message.channel, messageId: message.id });
    msg.edit({
        components: getButtons(message.guild?.id || '').compile() as string, 
        content: 'https://cdn.discordapp.com/attachments/843780743695171584/862763593509371964/hydralite_channel_header_roles.png',
    } as any);
}

async function toogleRole(type: string, user: Member, message: Message) {
    if (!message) return;
    if (!message.member) return;
    if (!message.guild) return;

    const server = servers.find(v => v.id == message.guild?.id ?? '');
    if (!server) return;

    const role = server.roles.find(v => v.id == type);
    if (!role) return;

    const guild_role = await message.guild.roles.fetch(role?.role);
    const member = await (await message.guild.members.fetch(user.user.id)).fetch(true);

    if (!guild_role) return;
    if (guild_role.members.has(member.id)) member.roles.remove(guild_role); else member.roles.add(guild_role);

    addRecent(type, user.nick ?? user.user.username, message, !guild_role.members.has(member.id));
}

function addRecent(type: string, user: string, message: Message, add: boolean) {
    const timeout = recent.get(type)?.timeout;
    if (timeout) clearTimeout(timeout);

    const object = {
        add,
        type,
        user,
        timeout: setTimeout(() => {
            recent.delete(type);
            update(message);
        }, 2500),
    } as RoleChange;
    recent.set(type, object);
    update(message);
}

const recent = new Map<string, RoleChange>();

function getButton(type: string, title: string) {
    const r = recent.get(type);

    let msg = title;
    let style = ButtonStyle.Primary;

    if (r) style = r.add ? ButtonStyle.Success : ButtonStyle.Danger;
    if (r) msg = `${r.add ? '+' : '-'} ${r.user}`

    return new ButtonComponent({
        style: style,
        label: msg,
        custom_id: type,
    });
}

function getButtons(guild: string) {
    const server = servers.find(v => v.id == guild);
    if (!server) return new ComponentCluster();

    const buttons: ButtonComponent[] = server.roles.map(v => getButton(v.id, v.title));
    const actionRow = new ComponentActionRow(...buttons);

    return new ComponentCluster(actionRow);
}

export async function sendRoles(guild: string, channel: string) {
    const g = await client.guilds.fetch(guild);
    if (g == null) return;

    const c = g.channels.resolve(channel) as TextChannel;
    if (c == null) return;

    const m = await c.messages.fetch({ limit: 1 });
    if (m.size > 0) return;
    
    const buttonCluster = getButtons(guild);
    client.interactions.sendComponents({
        channel: c, 
        components: buttonCluster, 
        content: 'https://cdn.discordapp.com/attachments/843780743695171584/862763593509371964/hydralite_channel_header_roles.png',
    });
}

const socket = io('https://hydraliteusercache.eliyah.repl.co');
socket.on('dev', async id => {
    for (const server of servers) {
        const guild = await client.guilds.fetch(server.id);
        const member = await guild.members.fetch(id);

        member.roles.add(server.dev);
    }
});