import React from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";
// import SidebarProjects from "./SidebarProjects";
import SidebarTabs from "./SidebarTabs";
import PlusIconSolid from "~/icons/solid/PlusIconSolid";
import { useState } from "react";
import NewProject from "../Projects/NewProjectModal";
import SidebarProjects from "./SidebarProjects";
import { useContext } from "react";
import { AuthContext } from "~/util/auth";
import Signup from "../Login/LoginModal";
// TODO: Properly mock out project list
// import projectList from "~/data/project/project.json";

interface SidebarProps {
  activeTab?: "Home" | "Activity" | "My Projects" | "Discover" | "Communicate";
  activeProjectId?: string;
}

const CreateProjectButton = () => {
  const { theme } = useThemeContext();
  const [clicked, SetClicked] = useState(false);
  return (
    <div
      onClick={() => SetClicked(true)}
      className={`h-[3.2rem] w-[3.2rem] cursor-pointer grid place-items-center rounded-2xl transition-all hover:opacity-[0.8] ${
        theme === "dark" && "bg-white"
      }`}
    >
      <NewProject isOpen={clicked} setIsOpen={SetClicked}></NewProject>
      <PlusIconSolid
        className={`fill-[#fff] h-[1.7rem] w-[1.7rem]`}
      />
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sidebar: React.FC<SidebarProps> = ({ activeTab, activeProjectId }) => {
  const { theme } = useThemeContext();
  const { loggedIn, user } = useContext(AuthContext);
  if (loggedIn) {
    return (
      <div
        className={`
        h-full w-[5rem] flex flex-col items-center gap-3 pt-2
        ${theme === "dark" && "bg-dark-bgMuted1"}
      `}
      >
        <SidebarTabs activeTab={activeTab} />
        <SidebarProjects projects={user.Project} activeProjectId={activeProjectId} />
        <CreateProjectButton />
      </div>
    );
  }else{
    return <Signup />
  }
};

export default Sidebar;
