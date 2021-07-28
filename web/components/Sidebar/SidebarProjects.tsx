import React from "react";
import SidebarProject from "./SidebarProject";

const SidebarProjects = () => {
  return (
    <div className={`w-full flex flex-col gap-2 items-center`}>
      <SidebarProject
        id="1"
        logoUrl="https://i1.wp.com/blog.alexdevero.com/wp-content/uploads/2018/11/how-to-build-simple-website-with-gatsbyjs-postcss-pt1.jpg?fit=1024%2C635&ssl=1"
        name="React JS"
        isActive={true}
      />
    </div>
  );
};

export default SidebarProjects;
