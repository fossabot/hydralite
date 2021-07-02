import React from "react";
import { BackIcon, SearchIcon, BellIcon, DropdownIcon } from "~/components/Icons";
export interface NavbarProps {
    avatar: string;
}

export const Navbar: React.FC<NavbarProps> = ({ avatar }) => {
    return (
        <div className="flex w-full p-4 justify-between items-center border-b border-white-seperator">
            <div className="flex justify-center items-center text-black cursor-pointer select-none">
                <div className="w-5 h-5"><BackIcon /></div>
                <div className="pl-1 font-semibold text-sm">Go Home</div>
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