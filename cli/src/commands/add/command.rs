use crate::model::command::Command;
use crate::VERSION;
use colored::Colorize;

pub struct Add {}

impl Command for Add {
    fn help() {
        println!("{}", format!(
            r#"hydra {}
    
Updates the index using the current content found in the working tree, to prepare the content staged for the next commit.

Usage: {} {} {}"#,
            VERSION.bright_green().bold(),
            "hydra".bright_green().bold(),
            "add".bright_purple(),
            "[path]".white(),
        ))
    }

    fn exec(_app: crate::model::app::App) {}
}
