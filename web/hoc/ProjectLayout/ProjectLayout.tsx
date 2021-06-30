import React, { useState } from "react";
import { UseableIcon, BackIcon, BellIcon, DevelopIcon, DropdownIcon, GroupIcon, HomeIcon, HydraIcon, InsightsIcon, MeetingIcon, MoreIcon, OutSourceIcon, RoadIcon, SearchIcon, SettingsIcon, TaskIcon } from "../../components/Icons";
import styles from "./ProjectLayout.module.scss";

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
    onChange?: (page: string) => unknown;
}
interface NavbarProps {
    avatar: string;
}

export const Pages = ['home', 'group', 'road', 'task', 'meeting', 'outsource', 'develop', 'insights', 'more', 'hydra', 'settings'] as const;
export type Page = typeof Pages[number];

interface PageProps {
    name: Page;
    title: string;
    logo: typeof UseableIcon;
}

const upper_pages: PageProps[] = [
    {
        name: 'home',
        title: 'Home',
        logo: HomeIcon
    },
    {
        name: 'group',
        title: 'Groups',
        logo: GroupIcon
    },
    {
        name: 'road',
        title: 'Roadmap',
        logo: RoadIcon
    },
    {
        name: 'task',
        title: 'Task Boards',
        logo: TaskIcon
    },
    {
        name: 'meeting',
        title: 'Meeting Rooms',
        logo: MeetingIcon
    },
    {
        name: 'outsource',
        title: 'Outsource',
        logo: OutSourceIcon
    },
    {
        name: 'develop',
        title: 'Develop',
        logo: DevelopIcon
    },
    {
        name: 'insights',
        title: 'Insights',
        logo: InsightsIcon
    },
    {
        name: 'more',
        title: 'More',
        logo: MoreIcon
    }
];

const lower_pages: PageProps[] = [
    {
        name: 'hydra',
        title: 'Hydra',
        logo: HydraIcon
    },
    {
        name: 'settings',
        title: 'Settings',
        logo: SettingsIcon
    }
];

export const Sidebar: React.FC<ProjectDashboardProps> = ({ name, members, logo, onChange }) => {
    const [selected, setSelected] = useState('home' as Page);

    const set = (page: Page) => {
        setSelected(page);
        onChange?.(page);
    }

    return (
        <div className={styles.sidebar}>
            <div className={styles.projectInfo}>
                <img src={logo} alt="Logo" className={styles.logo} />
                <div className={styles.projectInfoText}>
                    <div className={styles.projectInfoTextName}>{name}</div>
                    <div className={styles.projectInfoTextCount}>{members} members</div>
                </div>
            </div>
            <div className={styles.buttons}>
                <div className={styles.buttonSection}>
                    {
                        upper_pages.map((v, i) => <ProjectButton key={v.name + i} onClick={() => set(v.name)} selected={selected == v.name} image={<v.logo />} title={v.title} />)
                    }
                </div>
                <div className={styles.buttonSection}>
                    {
                        lower_pages.map((v, i) => <ProjectButton key={v.name + i} onClick={() => set(v.name)} selected={selected == v.name} image={<v.logo />} title={v.title} />)
                    }
                </div>
            </div>
        </div>
    );
};
export const Navbar: React.FC<NavbarProps> = ({ avatar }) => {
    return (
        <div className={styles.top}>
            <div className={styles.navbarSection}>
                <div className={styles.backIcon}><BackIcon /></div>
                <div className={styles.backText}>Go Home</div>
            </div>
            <div className={styles.searchBar}>
                <div className={styles.searchIcon}><SearchIcon /></div>
                <input className={styles.search} placeholder="Search" />
            </div>
            <div className={styles.navbarSection}>
                <div className={styles.bellIcon}><BellIcon /></div>
                <img src={avatar} className={styles.userIcon} />
                <div className={styles.dropdownIcon}><DropdownIcon /></div>
            </div>
        </div>
    );
};
export const ProjectLayout: React.FC<ProjectDashboardProps> = ({ onChange, name, members, logo, children }) => {
    return (
        <div className={styles.main}>
            <Sidebar onChange={onChange} name={name} members={members} logo={logo} />
            <div className={styles.right}>
                <Navbar avatar={'/avatar.png'} />
                <div className={styles.body}>
                    {children}
                </div>
            </div>
        </div>
    );
};
