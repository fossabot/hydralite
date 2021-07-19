import { Client } from "discord.js";
import InteractiveClient, { SlashCommand } from "@duxcore/interactive-discord";
import { Command } from "../types";
import { glob } from "glob";
export class Bot extends Client {
  constructor() {
    super();
    this.getCommands();
  }

  public interactions = new InteractiveClient(this);
  public commands = new Map<string, Command>();

  public async registerCommands(guild_id: string) {
    const commands: SlashCommand[] = [];
    this.commands.forEach((cmd) => {
      const command = new SlashCommand({
        name: cmd.name,
        description: cmd.description,
        options: cmd.options,
      });

      commands.push(command);
    });

    this.interactions.commands.bulkRegister(commands, guild_id);
  }

  public async getCommands() {
    glob(`${__dirname}/../commands/**.js`, async (err, files) => {
      files.map((f) => {
        const imported = require(f);

        const cmd: Command = imported.default;
        this.commands.set(cmd.name, cmd);
      });
    });
  }
}
