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
        className="flex flex-col w-full py-2 pl-4 h-[3.5rem]"
        style={{ boxShadow: "0px 4px 4px 0px #1F1F1F40" }}
      >
        <h1 className="font-bold text-md">Project Hydralite</h1>
        <h3 className="font-medium text-xs">420 members</h3>
      </div>
      <div className="flex flex-col p-3 pl-4 mt-2 h-[calc(100%-3.5rem)]">
        <div className="flex flex-col gap-5 mb-auto">
          <ProjectSidebarTab name="Home" Icon={HomeAltIcon} />
          <ProjectSidebarTab name="Home" Icon={HomeAltIcon} />
          <ProjectSidebarTab name="Home" Icon={HomeAltIcon} />
          <ProjectSidebarTab name="Home" Icon={HomeAltIcon} />
          <ProjectSidebarTab name="Home" Icon={HomeAltIcon} />
          <ProjectSidebarTab name="Home" Icon={HomeAltIcon} />
          <ProjectSidebarTab name="Home" Icon={HomeAltIcon} />
          <ProjectSidebarTab name="Home" Icon={HomeAltIcon} />
        </div>
        <div className="flex flex-col gap-5 mt-auto">
          <ProjectSidebarTab name="Home" Icon={HomeAltIcon} />
          <ProjectSidebarTab name="Home" Icon={HomeAltIcon} />
        </div>
      </div>
    </div>
  );
};

export default ProjectSidebar;
