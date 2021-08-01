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

const prod = process.env.NODE_ENV === "production";

const prod_server: Server = {
  id: "826330402939076648",
  channels: {
    roles: "853868620061081600",
  },
  dev: "854003820132040726",
  roles: [
    {
      id: "web",
      title: "React Frontend",
      role: "853869693575888906",
    },
    {
      id: "api",
      title: "NodeJS Backend",
      role: "853869711070986243",
    },
    {
      id: "mobile",
      title: "Flutter Mobile",
      role: "853869655500390460",
    },
    {
      id: "bot",
      title: "DiscordJS Bot",
      role: "853869727893159996",
    },
    {
      id: "ui",
      title: "User Interface",
      role: "853869759606423552",
    },
  ],
};

const dev_server: Server = {
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
};

export const servers: Server[] = prod ? [prod_server] : [dev_server];
