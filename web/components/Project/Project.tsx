import React, { useState } from "react";
import { GroupIcon, HomeIcon, RoadIcon } from "./Icons";
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


export const ProjectDashboard = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div className={styles.main}>
            <div className={styles.sidebar}>
                <div className={styles.logo}>
                    <img src="/logo.png" alt="Logo" className={styles.icon} />
                    <div className={styles.logoText}>
                        <div className={styles.logoTextName}>Project Hydralite</div>
                        <div className={styles.logoTextCount}>120 members</div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.buttonSection}>
                        <ProjectButton onClick={() => setSelected(0)} selected={selected == 0} image={<HomeIcon />} title="Home" />
                        <ProjectButton onClick={() => setSelected(1)} selected={selected == 1} image={<GroupIcon />} title="Groups" />
                        <ProjectButton onClick={() => setSelected(2)} selected={selected == 2} image={<RoadIcon />} title="Roadmap" />
                    </div>
                    <div className={styles.buttonSection}>

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
