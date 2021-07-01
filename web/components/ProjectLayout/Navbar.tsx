import React from "react";
import styles from "~/hoc/ProjectLayout/ProjectLayout.module.scss";
import { BackIcon, SearchIcon, BellIcon, DropdownIcon } from "~/components/Icons";
export interface NavbarProps {
    avatar: string;
}

export const Navbar: React.FC<NavbarProps> = ({ avatar }) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex justify-center items-center text-black cursor-pointer select-none">
                <div className="w-20 h-20"><BackIcon /></div>
                <div className="pl-5 font-bold text-3xl">Go Home</div>
            </div>
            <div className={styles.searchBar}>
                <div className={styles.searchIcon}><SearchIcon /></div>
                <input className={styles.search} placeholder="Search" />
            </div>
            <div className="flex justify-center items-center text-black cursor-pointer select-none">
                <div className={styles.bellIcon}><BellIcon /></div>
                <img src={avatar} className={styles.userIcon} />
                <div className={styles.dropdownIcon}><DropdownIcon /></div>
            </div>
        </div>
    );
};