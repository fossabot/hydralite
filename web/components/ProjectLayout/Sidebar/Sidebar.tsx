import React from "react";
import { SidebarLink } from "./SidebarLink";
import { ProjectPage } from "~/types/ProjectPageProps";
import {
  projectSidebarLowerLinks,
  projectSidebarUpperLinks,
} from "~/constants/projectSidebarLinks";

export interface SidebarProps {
  selected: ProjectPage;
}

export const Sidebar: React.FunctionComponent<SidebarProps> = ({
  selected,
}) => {
  return (
    <div className="flex flex-col items-start border-r border-white-seperator pt-5 pl-2 h-screen w-20 lg:w-52">
      <div className="flex flex-row justify-start items-center mb-6 ml-3">
        <img
          src="https://www.voltpkg.com/static/media/Logo.87cb34d7.svg"
          alt="Logo"
          className="w-10 h-10"
        />
        <div className="hidden lg:flex flex-col justify-between items-start ml-3">
          <div className="font-extrabold text-lg">Volt</div>
          <div className="text-sm font-bold">299 members</div>
        </div>
      </div>
      <div className="flex justify-between flex-col items-center h-full">
        <div className="flex flex-col items-center">
          {projectSidebarUpperLinks.map((link, i) => (
            <SidebarLink
              key={link.name + i}
              href={link.name}
              selected={selected == link.name}
              image={<link.logo />}
              title={link.title}
            />
          ))}
        </div>
        <div className="flex flex-col items-center">
          {projectSidebarLowerLinks.map((link, i) => (
            <SidebarLink
              key={link.name + i}
              href={link.name}
              selected={selected == link.name}
              image={<link.logo />}
              title={link.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
