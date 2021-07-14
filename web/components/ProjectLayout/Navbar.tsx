import { Icon } from "@iconify/react";
import React from "react";
export interface NavbarProps {
  avatar: string;
}

const SearchBar = () => {
  return (
    <div
      className="rounded-5 w-120 max-w-md h-9 flex justify-start items-center"
      style={{ boxShadow: "0px 0px 5px #cccccc" }}
    >
      <Icon icon="eva:search-fill" className="mx-4.5 h-5 w-5 text-muted" />
      <input
        className="text-text border-none outline-none font-bold text-md mr-4 bg-transparent w-full h-full placeholder-muted placeholder-"
        placeholder="Search"
      />
    </div>
  );
};

export const Navbar: React.FC<NavbarProps> = ({ avatar }) => {
  return (
    <div className="flex w-full p-3 justify-between items-center border-b border-white-seperator">
      <div className="flex justify-center items-center text-black cursor-pointer select-none">
        <Icon icon="eva:arrow-back-outline" className="w-4 h-4" />
        <div className="pl-1 font-bold text-xs">Go Home</div>
      </div>
      <SearchBar />
      <div className="flex justify-center items-center text-black cursor-pointer select-none">
        <div>
          <Icon icon="akar-icons:bell" className="text-muted h-4 w-4" />
        </div>
        <img className="w-8 h-8 rounded-half ml-2 mr-1" src={avatar} />
        <Icon
          icon="fluent-caret-down-12-filled"
          className="text-muted h-3 w-3"
        />
      </div>
    </div>
  );
};
