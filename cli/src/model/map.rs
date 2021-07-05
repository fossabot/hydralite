use crate::commands::{add::command::Add, explore::command::Explore, push::command::Push};
use std::env;

use super::{app::App, command::Command};

fn help() {}

pub fn map() {
    let args: Vec<String> = env::args().collect::<Vec<String>>();
    if args.len() > 2 {
        let app: App = App::new();
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
