import React from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";
import SidebarTabs from "./SidebarTabs";

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
      <SidebarTabs />
    </div>
  );
};

export default Sidebar;
