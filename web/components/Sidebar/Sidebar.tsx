import React from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";
import SidebarTab from "./SidebarTab";
import HistoryIcon from "~/icons/line/HistoryIcon";
import HistoryIconSolid from "~/icons/solid/HistoryIconSolid";
import ListUlIcon from "~/icons/line/ListUlIcon";
import ListUlIconSolid from "~/icons/solid/ListUlIconSolid";
import CompassIcon from "~/icons/line/CompassIcon";
import CompassIconSolid from "~/icons/solid/CompassIconSolid";
import MessagesIcon from "~/icons/line/MessagesIcon";
import MessagesIconSolid from "~/icons/solid/MessagesIconSolid";

interface SidebarProps {
  activeTab?: "Home" | "Activity" | "My Projects" | "Discover" | "Communicate";
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab }) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`
        h-full flex flex-col gap-2 items-center w-[4.3rem] p-2
        ${theme === "dark" && "bg-dark-bgMuted1"}
      `}
    >
      <SidebarTab
        isActive={activeTab === "Home"}
        activeIcon={
          <img
            src="/HydraliteLogoMonochrome.svg"
            className="select-none h-[2.2rem] w-[2.2rem]"
            draggable={false}
          />
        }
        icon={
          <img
            src="/HydraliteLogo.svg"
            className="select-none h-[2.2rem] w-[2.2rem]"
            draggable={false}
          />
        }
        name="Home"
        link="/"
      />
      <SidebarTab
        isActive={activeTab === "Activity"}
        activeIcon={
          <HistoryIconSolid className="h-[1.9rem] w-[1.9rem] fill-[#fff]" />
        }
        icon={<HistoryIcon className="h-[1.9rem] w-[1.9rem] fill-[#fff]" />}
        name="Activity"
        link="/activity"
      />
      <SidebarTab
        isActive={activeTab === "My Projects"}
        activeIcon={
          <ListUlIconSolid className="h-[1.9rem] w-[1.9rem] fill-[#fff]" />
        }
        icon={<ListUlIcon className="h-[1.9rem] w-[1.9rem] fill-[#fff]" />}
        name="My Projects"
        link="/projects"
      />
      <SidebarTab
        isActive={activeTab === "Discover"}
        activeIcon={
          <CompassIconSolid className="h-[1.9rem] w-[1.9rem] fill-[#fff]" />
        }
        icon={<CompassIcon className="h-[1.9rem] w-[1.9rem] fill-[#fff]" />}
        name="Discover"
        link="/discover"
      />
      <SidebarTab
        isActive={activeTab === "Communicate"}
        activeIcon={
          <MessagesIconSolid className="h-[1.9rem] w-[1.9rem] fill-[#fff]" />
        }
        icon={<MessagesIcon className="h-[1.9rem] w-[1.9rem] fill-[#fff]" />}
        name="Communicate"
        link="/communicate"
      />
    </div>
  );
};

export default Sidebar;
