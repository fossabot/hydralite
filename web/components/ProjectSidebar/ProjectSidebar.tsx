import React from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";
import { ProjectSidebarTab } from "./ProjectSidebarTab";
import HomeAltIcon from "~/icons/line/HomeAltIcon";

const ProjectSidebar = () => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`h-screen w-[14rem] flex flex-col ${
        theme === "dark" && "bg-dark-bgMuted3 text-[#fff]"
      }`}
    >
      <div
        className="flex flex-col w-full py-2 pl-4"
        style={{ boxShadow: "0px 4px 4px 0px #1F1F1F40" }}
      >
        <h1 className="font-bold text-md">Project Hydralite</h1>
        <h3 className="font-medium text-xs">420 members</h3>
      </div>
      <div className="flex flex-col gap-5 p-3 pl-4 mt-2">
        <ProjectSidebarTab
          name="Home"
          Icon={
            HomeAltIcon
          }
        />
      </div>
    </div>
  );
};

export default ProjectSidebar;
