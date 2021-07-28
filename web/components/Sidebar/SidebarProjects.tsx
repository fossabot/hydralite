import React from "react";
import SidebarProject from "./SidebarProject";

const SidebarProjects = () => {
  return (
    <div className={`w-full flex flex-col gap-2 items-center`}>
      <SidebarProject
        id="1"
        logoUrl="https://www.gatsbyjs.com/static/d4ed2bdc92d5aa7991670a394c910cc8/a3df1/vertical-treatment.jpg"
        name="React JS"
        isActive={false}
      />
    </div>
  );
};

export default SidebarProjects;
