import React from "react";
import SidebarProject from "./SidebarProject";

const SidebarProjects = () => {
  return (
    <div className={`w-full flex flex-col gap-2 items-center`}>
      <SidebarProject
        id="1"
        logoUrl="https://i1.wp.com/blog.alexdevero.com/wp-content/uploads/2018/11/how-to-build-simple-website-with-gatsbyjs-postcss-pt1.jpg?fit=1024%2C635&ssl=1"
        name="Gatsby JS"
        isActive={false}
      />
      <SidebarProject
        id="2"
        logoUrl="https://yt3.ggpht.com/ytc/AKedOLQiGDp3LtB0YxdRAqbAkCz01jVJ9aW4gAakms5D=s900-c-k-c0x00ffffff-no-rj"
        name="Dogehouse"
        isActive={false}
      />
      <SidebarProject
        id="3"
        logoUrl="https://www.pngkey.com/png/full/6-65108_twitter-circle-logo-transparent-background-twitter-logo.png"
        name="Twitter"
        isActive={false}
      />
      <SidebarProject
        id="4"
        logoUrl="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        name="GitHub"
        isActive={false}
      />
    </div>
  );
};

export default SidebarProjects;
