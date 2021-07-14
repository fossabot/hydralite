import { ApplicationCommandOption, CommandInteractionController } from '@duxcore/interactive-discord';
import * as Discord from 'discord.js';

export interface Command {
    name: string;
    description: string;
    options: ApplicationCommandOption[];
    execute(client: Discord.Client, interaction: CommandInteractionController): any;
}