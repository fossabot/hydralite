import React from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";
import SidebarProjects from "./SidebarProjects";
import SidebarTabs from "./SidebarTabs";
import PlusIconSolid from "~/icons/solid/PlusIconSolid";
// TODO: Properly mock out project list
// import projectList from "~/data/project/project.json";
const projectList = [];

interface SidebarProps {
  activeTab?: "Home" | "Activity" | "My Projects" | "Discover" | "Communicate";
  activeProjectId?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, activeProjectId }) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`
        h-full w-[5rem] flex flex-col items-center gap-3 pt-2
        ${theme === "dark" && "bg-dark-bgMuted1"}
      `}
    >
      <SidebarTabs activeTab={activeTab} />
      <SidebarProjects
        projects={projectList}
        activeProjectId={activeProjectId}
      />
      <CreateProjectButton />
    </div>
  );
};

const CreateProjectButton = () => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`h-[3.2rem] w-[3.2rem] cursor-pointer grid place-items-center rounded-2xl transition-all hover:opacity-[0.8] ${
        theme === "dark" && "bg-dark-bgMuted4"
      }`}
    >
      <PlusIconSolid
        className={`${theme === "dark" && "fill-[#fff]"} h-[1.7rem] w-[1.7rem]`}
      />
    </div>
  );
};

export default Sidebar;
