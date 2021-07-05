use crate::model::{app::App, command::Command};

pub struct Push {}

impl Command for Push {
    fn help() {}

    fn exec(_app: App) {}
}
