import React from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";
import { ProjectSidebarTab } from "./ProjectSidebarTab";

import {
  sidebarLowerLinks,
  sidebarUpperLinks,
} from "~/constants/projectSidebar";
import axios from "axios";
import { serverUrl } from "~/constants/global";
import router from "next/router";
import { useEffect } from "react";
import { useState } from "react";

const ProjectSidebar = ({ activeProjectSidebarLink }) => {
  const { theme } = useThemeContext();
  const [project, SetProject] = useState();
  useEffect(() => {
    const id = router.asPath.split("/")[2];
    const accessToken = localStorage.getItem("accessToken");
    axios
      .get(`${serverUrl}/api/projects/getProject?id=${id}`, {
        headers: { authorization: `bearer ${accessToken}` },
      })
      .then((e) => SetProject(e.data));
  }, []);

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
        {project ? (
          // @ts-expect-error
          <h1 className="font-bold text-3xl">{project!.title}</h1>
        ) : (
          "loading"
        )}
        {/* <h3 className="font-medium text-xs">420 members</h3> */}
      </div>
      <div className="flex flex-col p-3 pl-4 mt-2 h-[calc(100%-3.5rem)]">
        <div className="flex flex-col gap-5 mb-auto">
          {sidebarUpperLinks.map((link) => {
            return (
              <ProjectSidebarTab
                name={link.name}
                Icon={link.icon}
                ActiveIcon={link.activeIcon}
                isActive={activeProjectSidebarLink === link.name}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-5 mt-auto">
          {sidebarLowerLinks.map((link) => {
            return (
              <ProjectSidebarTab
                name={link.name}
                Icon={link.icon}
                ActiveIcon={link.activeIcon}
                isActive={activeProjectSidebarLink === link.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectSidebar;
