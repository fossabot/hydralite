import { Client } from 'discord.js';
import InteractiveClient from "@duxcore/interactive-discord";
import { Command } from '../types';

export class Bot extends Client {
    constructor() {
        super();
    }

    public interactions = new InteractiveClient(this);
    public commands = new Map<string, Command>();
}
