import React from "react";
import styles from "./ProjectLayout.module.scss";
import { lower_pages, Page, upper_pages } from "./pages";
import { ProjectButton } from "./Button";
import { project } from "./projects";

export interface SidebarProps {
    project: string;
    selected: Page;
}

export const Sidebar: React.FunctionComponent<SidebarProps> = ({ selected }) => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.projectInfo}>
                <img src={project.logo} alt="Logo" className={styles.logo} />
                <div className={styles.projectInfoText}>
                    <div className={styles.projectInfoTextName}>{project.name}</div>
                    <div className={styles.projectInfoTextCount}>{project.members} members</div>
                </div>
            </div>
            <div className={styles.buttons}>
                <div className={styles.buttonSection}>
                    {
                        upper_pages.map((v, i) => <ProjectButton key={v.name + i} href={v.name} selected={selected == v.name} image={<v.logo />} title={v.title} />)
                    }
                </div>
                <div className={styles.buttonSection}>
                    {
                        lower_pages.map((v, i) => <ProjectButton key={v.name + i} href={v.name} selected={selected == v.name} image={<v.logo />} title={v.title} />)
                    }
                </div>
            </div>
        </div>
    );
};