import React from "react";
import styles from "./ProjectLayout.module.scss";
import { BackIcon, SearchIcon, BellIcon, DropdownIcon } from "~/components/Icons";

export interface NavbarProps {
    avatar: string;
}
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