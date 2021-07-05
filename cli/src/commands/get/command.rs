use std::path::Path;

use git2::{Cred, Error, RemoteCallbacks};

pub struct Get {}

impl Get {
    pub fn get() {
        let mut callbacks = RemoteCallbacks::new();
        callbacks.transfer_progress(|progress| {
            println!("{}", progress.received_bytes());
            true
        });

        let mut fo = git2::FetchOptions::new();
        fo.remote_callbacks(callbacks);

        // Prepare builder.
        let mut builder = git2::build::RepoBuilder::new();
        builder.fetch_options(fo);

        builder
            .clone("https://github.com/voltpkg/volt", Path::new("/something"))
            .unwrap();
    }
}
