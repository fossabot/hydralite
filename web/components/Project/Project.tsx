import React, { useState } from "react";
import { DevelopIcon, GroupIcon, HomeIcon, HydraIcon, InsightsIcon, MeetingIcon, MoreIcon, OutSourceIcon, RoadIcon, SettingsIcon, TaskIcon } from "./Icons";
import styles from "./Project.module.scss";

interface Button {
    image: React.ReactFragment;
    title: string;

    selected?: boolean;
    onClick?: () => unknown;
}

export const ProjectButton: React.FC<Button> = ({ selected, onClick, image, title }) => {
    return (
        <div onClick={() => onClick?.()} className={[styles.button, ...(selected ? [styles.selected] : [])].join(' ')}>
            <div className={styles.buttonIcon}>{image}</div>
            <div className={styles.buttonTitle}>{title}</div>
        </div>
    );
};

interface ProjectDashboardProps {
    name: string;
    members: number;

    logo: string;
}

export const ProjectDashboard: React.FC<ProjectDashboardProps> = ({ name, members, logo }) => {
    const [selected, setSelected] = useState(0);

    return (
        <div className={styles.main}>
            <div className={styles.sidebar}>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo" className={styles.icon} />
                    <div className={styles.logoText}>
                        <div className={styles.logoTextName}>{name}</div>
                        <div className={styles.logoTextCount}>{members} members</div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.buttonSection}>
                        <ProjectButton onClick={() => setSelected(0)} selected={selected == 0} image={<HomeIcon />} title="Home" />
                        <ProjectButton onClick={() => setSelected(1)} selected={selected == 1} image={<GroupIcon />} title="Groups" />
                        <ProjectButton onClick={() => setSelected(2)} selected={selected == 2} image={<RoadIcon />} title="Roadmap" />
                        <ProjectButton onClick={() => setSelected(3)} selected={selected == 3} image={<TaskIcon />} title="Task Boards" />
                        <ProjectButton onClick={() => setSelected(4)} selected={selected == 4} image={<MeetingIcon />} title="Meeting Rooms" />
                        <ProjectButton onClick={() => setSelected(5)} selected={selected == 5} image={<OutSourceIcon />} title="Outsource" />
                        <ProjectButton onClick={() => setSelected(6)} selected={selected == 6} image={<DevelopIcon />} title="Develop" />
                        <ProjectButton onClick={() => setSelected(7)} selected={selected == 7} image={<InsightsIcon />} title="Insights" />
                        <ProjectButton onClick={() => setSelected(8)} selected={selected == 8} image={<MoreIcon />} title="More" />
                    </div>
                    <div className={styles.buttonSection}>
                        <ProjectButton onClick={() => setSelected(9)} selected={selected == 9} image={<HydraIcon />} title="Hydra" />
                        <ProjectButton onClick={() => setSelected(10)} selected={selected == 10} image={<SettingsIcon />} title="Settings" />
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.top}></div>
                <div className={styles.body}></div>
            </div>
        </div>
    );
};
