import React from "react";
import SidebarProject from "./SidebarProject";

const SidebarProjects = ({ projects, activeProjectId = "0" }) => {
  return (
    <div className={`w-full flex flex-col gap-2 items-center`}>
      {projects.map((project, i) => {
        return (
          <SidebarProject
            key={i}
            id={project.id}
            logoUrl={project.logoUrl}
            name={project.name}
            isActive={activeProjectId === project.id}
          />
        );
      })}
    </div>
  );
};

export default SidebarProjects;
