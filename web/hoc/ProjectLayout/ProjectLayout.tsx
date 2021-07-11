import React from "react";
import { Navbar } from "~/components/ProjectLayout/Navbar";
import { Sidebar } from "~/components/ProjectLayout/Sidebar/Sidebar";
import { ProjectPage } from "~/types/ProjectPageProps";

export interface ProjectLayoutProps {
  selected: ProjectPage;
  centerContent?: boolean;
}

export const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  centerContent,
  selected,
  children,
}) => {
  return (
    <div className="flex w-screen h-screen justify-between items-center overflow-hidden">
      <Sidebar selected={selected} />
      <div className="flex flex-col w-full h-screen justify-between items-center">
        <Navbar avatar="/avatar.png" />
        <div
          className={`w-full h-screen ${
            centerContent ? "grid place-items-center pb-20" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
