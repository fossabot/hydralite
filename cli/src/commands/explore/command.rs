use crate::model::{app::App, command::Command};

pub struct Explore {}

impl Command for Explore {
    fn help() {
        println!("{}", String::new());
    }
    fn exec(_app: App) {}
}
