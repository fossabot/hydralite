use std::path::Path;

use git2::RemoteCallbacks;
use indicatif::ProgressBar;

pub struct Get {}

impl Get {
    pub fn get() {
        let mut callbacks = RemoteCallbacks::new();
        let progress_bar = ProgressBar::new(0);

        callbacks.transfer_progress(move |progress| {
            progress_bar.set_length(progress.total_objects() as u64);
            progress_bar.set_position(progress.indexed_objects() as u64);

            // println!("{}", progress.received_bytes());
            true
        });

        let mut fo = git2::FetchOptions::new();
        fo.remote_callbacks(callbacks);

        // Prepare builder.
        let mut builder = git2::build::RepoBuilder::new();
        builder.fetch_options(fo);

        builder
            .clone(
                "https://github.com/voltpkg/volt",
                Path::new(r"C:\Users\xtrem\Desktop\vol"),
            )
            .unwrap();
    }
}
