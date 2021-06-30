import React from "react";
import styles from "./ProjectLayout.module.scss";
import { Navbar } from "./Navbar";
import { Page } from "./pages";
import { Sidebar } from "./Sidebar";

export interface ProjectLayoutProps {
    project: string;
    selected: Page;
}

export const ProjectLayout: React.FC<ProjectLayoutProps> = ({ project, selected, children }) => {
    return (
        <div className={styles.main}>
            <Sidebar {...{selected, project}} />
            <div className={styles.right}>
                <Navbar avatar={'/avatar.png'} />
                <div className={styles.body}>
                    {children}
                </div>
            </div>
        </div>
    );
};
