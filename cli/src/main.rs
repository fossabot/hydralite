use model::map::map_commands;

pub mod commands;
pub mod model;

const VERSION: &'static str = "1.0.0 pre-alpha";

fn main() {
    map_commands();
}
