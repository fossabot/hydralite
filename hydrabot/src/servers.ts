import { Snowflake } from "discord.js";

interface Server {
  id: Snowflake;
  channels: {
    roles: Snowflake;
  };
  dev: Snowflake;
  roles: ButtonRole[];
}
interface ButtonRole {
  id: string;
  title: string;
  role: Snowflake;
}

export const servers: Server[] = [
  {
    id: "861658311485423646",
    channels: {
      roles: "864782758882574346",
    },
    dev: "865203121713446942",
    roles: [
      {
        id: "web",
        title: "React Frontend",
        role: "864997834129801227",
      },
      {
        id: "api",
        title: "NodeJS Backend",
        role: "864997841784799233",
      },
      {
        id: "mobile",
        title: "Flutter Mobile",
        role: "864997844759085119",
      },
      {
        id: "bot",
        title: "DiscordJS Bot",
        role: "864997846976954408",
      },
      {
        id: "ui",
        title: "User Interface",
        role: "864997849081839618",
      },
    ],
  },
];
