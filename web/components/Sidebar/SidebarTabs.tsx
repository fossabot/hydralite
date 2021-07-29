import React from "react";
import SidebarTab from "./SidebarTab";

import HistoryIcon from "~/icons/line/HistoryIcon";
import HistoryIconSolid from "~/icons/solid/HistoryIconSolid";
import ListUlIcon from "~/icons/line/ListUlIcon";
import ListUlIconSolid from "~/icons/solid/ListUlIconSolid";
import CompassIcon from "~/icons/line/CompassIcon";
import CompassIconSolid from "~/icons/solid/CompassIconSolid";
import MessagesIcon from "~/icons/line/MessagesIcon";
import MessagesIconSolid from "~/icons/solid/MessagesIconSolid";
import { useThemeContext } from "~/hoc/theme/ThemeContext";

const SidebarTabs = ({
  activeTab,
}: {
  activeTab?: "Home" | "Activity" | "My Projects" | "Discover" | "Communicate";
}) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`w-full flex flex-col items-center gap-[0.3rem] pb-2 border-b-2 ${
        theme === "dark" && "border-dark-bgMuted2"
      }`}
    >
      <SidebarTab
        isActive={activeTab === "Home"}
        activeIcon={
          <img
            src="/HydraliteLogoMonochrome.svg"
            className="select-none h-[2rem] w-[2rem]"
            draggable={false}
          />
        }
        icon={
          <img
            src="/HydraliteLogo.svg"
            className="select-none h-[2rem] w-[2rem]"
            draggable={false}
          />
        }
        name="Home"
        link="/"
      />
      <SidebarTab
        isActive={activeTab === "Activity"}
        activeIcon={
          <HistoryIconSolid className="h-[1.7rem] w-[1.7rem] fill-[#fff]" />
        }
        icon={<HistoryIcon className="h-[1.7rem] w-[1.7rem] fill-[#fff]" />}
        name="Activity"
        link="/activity"
      />
      <SidebarTab
        isActive={activeTab === "My Projects"}
        activeIcon={
          <ListUlIconSolid className="h-[1.7rem] w-[1.7rem] fill-[#fff]" />
        }
        icon={<ListUlIcon className="h-[1.7rem] w-[1.7rem] fill-[#fff]" />}
        name="My Projects"
        link="/projects"
      />
      <SidebarTab
        isActive={activeTab === "Discover"}
        activeIcon={
          <CompassIconSolid className="h-[1.7rem] w-[1.7rem] fill-[#fff]" />
        }
        icon={<CompassIcon className="h-[1.7rem] w-[1.7rem] fill-[#fff]" />}
        name="Discover"
        link="/discover"
      />
      <SidebarTab
        isActive={activeTab === "Communicate"}
        activeIcon={
          <MessagesIconSolid className="h-[1.7rem] w-[1.7rem] fill-[#fff]" />
        }
        icon={<MessagesIcon className="h-[1.7rem] w-[1.7rem] fill-[#fff]" />}
        name="Communicate"
        link="/communicate"
      />
    </div>
  );
};

export default SidebarTabs;
