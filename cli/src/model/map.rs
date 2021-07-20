use super::{app::App, command::Command};
use crate::commands::get::command::Get;
use crate::commands::{add::command::Add, explore::command::Explore, push::command::Push};
use crate::VERSION;
use colored::Colorize;
use std::env;

fn help() {
    println!(
        "{}",
        format!(
            r#"hydra {}

Start a workspace:
  {} - Initialize hydralite in an existing folder. 
  {} - Download a hydralite project.

Collaborate:
  {} - Grab the latest changes on a hydralite project from a specific branch.
  {} - Update your hydralite project with your latest code.

Develop:
  {} - Bind the current changes in your code to a name.

Usage: {} {} {}"#,
            VERSION.bright_green().bold(),
            "init".bright_cyan().bold(),
            "get".bright_cyan().bold(),
            "pull".bright_cyan().bold(),
            "push".bright_cyan().bold(),
            "bind".bright_cyan().bold(),
            "hydra".bright_green().bold(),
            "[command]".bright_purple(),
            "[flags]".bright_blue(),
        )
    )
}

pub fn map_commands() {
    let args: Vec<String> = env::args().collect::<Vec<String>>();

    if args.len() > 2 {
        let app: App = App::new();
        match args[1].as_str() {
            "add" => Add::exec(app),
            "explore" => Explore::exec(app),
            "push" => Push::exec(app),
            &_ => {}
        }
    } else if args.len() == 2 {
        match args[1].as_str() {
            "add" => Add::help(),
            "explore" => Explore::help(),
            "push" => Push::help(),
            &_ => {}
        }
    } else {
        help();
    }
}
