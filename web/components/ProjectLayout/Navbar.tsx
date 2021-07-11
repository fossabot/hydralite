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
      <div
        className="rounded-5 w-80 max-w-md h-10 flex justify-start items-center"
        style={{ boxShadow: "0px 0px 5px #cccccc" }}
      >
        <div className="ml-4 mr-5 w-6 h-6 text-gray">
          <SearchIcon />
        </div>
        <input
          className="text-text border-none outline-none font-bold text-base mr-4 bg-transparent w-full h-full"
          placeholder="Search"
        />
      </div>
      <div className="flex justify-center items-center text-black cursor-pointer select-none">
        <div className="flex justify-center items-center w-4 h-4 text-gray">
          <BellIcon />
        </div>
        <img className="w-9 h-9 rounded-half ml-3 mr-1" src={avatar} />
        <div className="flex justify-center items-center mr-5 w-2 h-1">
          <DropdownIcon />
        </div>
      </div>
    </div>
  );
};
