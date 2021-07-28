import React from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";
import SidebarProjects from "./SidebarProjects";
import SidebarTabs from "./SidebarTabs";

interface SidebarProps {
  activeTab?: "Home" | "Activity" | "My Projects" | "Discover" | "Communicate";
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab }) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`
        h-full w-[4.8rem] flex flex-col items-center gap-3 pt-2
        ${theme === "dark" && "bg-dark-bgMuted1"}
      `}
    >
      <SidebarTabs activeTab={activeTab} />
      <SidebarProjects />
    </div>
  );
};

export default Sidebar;
