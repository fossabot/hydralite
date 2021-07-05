import * as Discord from 'discord.js';

export interface Command {
    name: string;
    description: string;
    args: any[];
    execute(bot: Discord.Client, command: any, callback: Function) : any;
    init(bot: Discord.Client, commands: Map<string, Command>) : any;
}