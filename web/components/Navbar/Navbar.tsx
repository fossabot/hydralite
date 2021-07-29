import React from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";
import AngleDownIcon from "~/icons/line/AngleDownIcon";
import CogIcon from "~/icons/line/CogIcon";
import SearchIcon from "~/icons/line/SearchIcon";

const Navbar = () => {
  const { theme } = useThemeContext();

  return (
    <div className="w-full flex items-center gap-3 justify-end pt-2 pr-2">
      <SearchIcon
        className={`w-[1.1rem] h-[1.1rem] ${theme === "dark" && "fill-[#fff]"}`}
      />
      <CogIcon
        className={`w-[1.1rem] h-[1.1rem] ${theme === "dark" && "fill-[#fff]"}`}
      />
      <ProfileWidget />
    </div>
  );
};

const ProfileWidget = () => {
  const { theme } = useThemeContext();
  return (
    <div
      className={`flex items-center gap-2 p-2 rounded-lg ${
        theme === "dark" && "bg-dark-bgMuted1 text-dark-fg"
      }`}
    >
      <img
        className="h-6 w-6 rounded-full"
        src="https://avatars.githubusercontent.com/u/67153585?v=4"
      />
      <span className="font-semibold text-md">fullstackslayer</span>
      <AngleDownIcon
        className={`w-5 h-5 ${theme === "dark" && "fill-[#fff]"}`}
      />
    </div>
  );
};

export default Navbar;
