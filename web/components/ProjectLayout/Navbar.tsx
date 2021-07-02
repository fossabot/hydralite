import React from "react";
import {
  BackIcon,
  SearchIcon,
  BellIcon,
  DropdownIcon,
} from "~/components/Icons";
export interface NavbarProps {
  avatar: string;
}

export const Navbar: React.FC<NavbarProps> = ({ avatar }) => {
  return (
    <div className="flex w-full p-4 justify-between items-center border-b border-white-seperator">
      <div className="flex justify-center items-center text-black cursor-pointer select-none">
        <div className="w-5 h-5">
          <BackIcon />
        </div>
        <div className="pl-1 font-semibold text-sm">Go Home</div>
      </div>
      <div className="rounded-md shadow-md color-bluegrey w-30rem h-10 flex justify-start items-center">
        <div className="mx-4 w-5 h-5">
          <SearchIcon />
        </div>
        <input
          className="outline-none pb-1 border-0 w-full h-full font-normal bg-transparent"
          placeholder="Search"
        />
      </div>
      <div className="flex justify-center items-center text-black cursor-pointer select-none">
        <div className="flex justify-center items-center w-5 h-5 color-bluegrey">
          <BellIcon />
        </div>
        <img
          src={avatar}
          className="block ml-2.5 mr-1.5 w-9 h-9 rounded-full"
        />
        <div className="flex justify-center items-center w-2 h-1 mr-5">
          <DropdownIcon />
        </div>
      </div>
    </div>
  );
};
