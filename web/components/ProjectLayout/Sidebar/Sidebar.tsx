import React from "react";
import styles from "~/hoc/ProjectLayout/ProjectLayout.module.scss";
import { SidebarLink } from "./SidebarLink";
import { ProjectPage } from "~/types/ProjectPageProps";
import { projectSidebarLowerLinks, projectSidebarUpperLinks } from "~/constants/projectSidebarLinks";

export interface SidebarProps {
  project: string;
  selected: ProjectPage;
}

export const Sidebar: React.FunctionComponent<SidebarProps> = ({
  selected,
}) => {
  return (
    <div className="flex flex-col justify-between ">
      <div className={styles.projectInfo}>
        <img
          src="https://www.voltpkg.com/static/media/Logo.87cb34d7.svg"
          alt="Logo"
          className="w-9 h-9"
        />
        <div className="flex flex-col justify-between items-start py-4  ml-12">
          <div className="font-bold text-2xl">Volt</div>
          <div className="font-semibold text-xl">69 members</div>
        </div>
      </div>
      <div className="flex justify-between flex-col items-center">
        <div className="flex flex-col justify-start items-center">
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
        <div className="flex flex-col justify-start items-center">
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
