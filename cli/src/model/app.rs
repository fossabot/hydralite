use std::env;
use std::path::PathBuf;

#[allow(dead_code)]
#[derive(Debug)]
pub struct App {
    pub args: Vec<String>,
    pub current_directory: PathBuf,
}

impl App {
    pub fn new() -> App {
        App {
            args: env::args().collect(),
            current_directory: env::current_dir().unwrap(),
        }
    }
}
