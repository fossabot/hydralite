import React from "react";
import { SidebarLink } from "./SidebarLink";
import { ProjectPage } from "~/types/ProjectPageProps";
import { projectSidebarLowerLinks, projectSidebarUpperLinks } from "~/constants/projectSidebarLinks";

export interface SidebarProps {
  selected: ProjectPage;
}

export const Sidebar: React.FunctionComponent<SidebarProps> = ({
  selected,
}) => {
  return (
    <div className="flex flex-col items-start border-r border-white-seperator py-5 px-2 h-screen w-60">
      <div className="flex flex-row justify-start items-center mb-6 ml-3">
        <img
          src="https://www.voltpkg.com/static/media/Logo.87cb34d7.svg"
          alt="Logo"
          className="w-10 h-10"
        />
        <div className="flex flex-col justify-between items-start ml-5">
          <div className="font-bold text-xl leading-5">Volt</div>
          <div className="text-sm font-semibold">299 members</div>
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
