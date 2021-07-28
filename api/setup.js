require("dotenv").config();
const fs = require("fs");
const inquirer = require("inquirer");
const chalk = require("chalk");

const prompt = async (args) =>
  await inquirer.prompt([{ type: "input", ...args, name: "cmd" }]).then((a) => {
    return args.parse ? args.parse(a.cmd) : a.cmd;
  });

(async () => {
  if (
    process.env.GITHUB_CLIENT_ID ||
    process.env.GITHUB_CLIENT_SECRET ||
    process.env.DATABASE_URL
  )
    return console.log(
      chalk.red("!") +
        chalk.red.bold(" Skipping .env setup (.env values already exist).")
    );
  console.clear();
  console.log(chalk.green("!") + chalk.blue.bold(" API .env Configurator\n"));

  let env = {};

  env.GITHUB_CLIENT_ID = await prompt({
    message: `Please enter your GitHub Client ID:`,
  });

  env.GITHUB_CLIENT_SECRET = await prompt({
    message: `Please enter your GitHub Client Secret:`,
  });

  if (!process.env.IS_GITPOD) {
    env.DATABASE_URL = await prompt({
      message: `Please enter your PostgresSQL Database URL:`,
      default: "postgresql://postgres@localhost/postgres",
    });
  } else {
    env.DATABASE_URL = "postgresql://gitpod@localhost/postgres";
  }

  if (!process.env.IS_GITPOD) {
    env.REDIS_URL = await prompt({
      message: `Please enter your Redis URL:`,
      default: "redis://localhost",
    });
  } else {
    env.REDIS_URL = "redis://hydralitedev:764e2f151a1cc2c04d3dd80d0430453b759f79bee75d74fa25f5c104152ba82b@localhost";
  }

  console.log(
    chalk.green("*") + chalk.magenta.bold(" Writing configuration...")
  );

  const mapped = Object.keys(env).map((k) => `${k}='${env[k]}'`);

  fs.writeFile(`.env`, mapped.join("\n"), () => {});

  console.log(
    chalk.green("^") + chalk.yellow.bold(" Finished writing configuration!\n")
  );
})();
