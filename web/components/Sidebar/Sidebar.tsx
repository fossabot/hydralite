import React from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";
import SidebarTab from "./SidebarTab";
import HistoryIcon from "~/icons/line/HistoryIcon"
import ListUlIcon from "~/icons/line/ListUlIcon"
import CompassIcon from "~/icons/line/CompassIcon"
import MessagesIcon from "~/icons/line/MessagesIcon"

const Sidebar = ({ projects }: { projects: {}[] }) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`
        h-full flex flex-col gap-2 items-center w-[4.3rem] p-2
        ${theme === "dark" && "bg-dark-bgMuted1"}
      `}
    >
      <SidebarTab
        isActive={false}
        activeIcon={<img src="/HydraliteLogoMonochrome.svg" className="select-none h-[2.7rem] w-[2.7rem]" draggable={false} />}
        icon={<img src="/HydraliteLogo.svg" className="select-none h-[2.2rem] w-[2.2rem]" draggable={false} />}
        name="Home"
        link="/"
      />
      <SidebarTab
        isActive={false}
        icon={<HistoryIcon className="h-[1.9rem] w-[1.9rem] fill-[#fff]" />}
        name="Home"
        link="/"
      />
      <SidebarTab
        isActive={false}
        icon={<ListUlIcon className="h-[1.9rem] w-[1.9rem] fill-[#fff]" />}
        name="Home"
        link="/"
      />
      <SidebarTab
        isActive={false}
        icon={<CompassIcon className="h-[1.9rem] w-[1.9rem] fill-[#fff]" />}
        name="Home"
        link="/"
      />
      <SidebarTab
        isActive={false}
        icon={<MessagesIcon className="h-[1.9rem] w-[1.9rem] fill-[#fff]" />}
        name="Home"
        link="/"
      />
    </div>
  );
};

export default Sidebar;
