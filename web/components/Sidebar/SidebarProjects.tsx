import React from "react";
import SidebarProject from "./SidebarProject";

const SidebarProjects = ({ projects, activeProjectId = "0" }) => (
  <div className="w-full flex flex-col gap-2 items-center">
    {projects.map((project, i) => (
      <SidebarProject
        /* eslint-disable-next-line react/no-array-index-key */
        key={i}
        id={project.id}
        logoUrl={project.logoUrl}
        name={project.title}
        isActive={activeProjectId === project.id}
      />
    ))}
  </div>
);

export default SidebarProjects;
