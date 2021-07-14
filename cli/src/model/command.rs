use super::app::App;

pub trait Command {
    fn help() {}

    fn exec(_app: App) {}
}
