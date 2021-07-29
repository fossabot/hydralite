import React from "react";
import { ProjectLayout } from "~/hoc/ProjectLayout/ProjectLayout";
import MetaData from "~/partials/Meta";
import { Sidebar } from "~/components/ProjectFeed/Sidebar/Sidebar";
import { Feed } from "~/components/ProjectFeed/Feed/Feed";

const ProjectFeed = () => {
  return (
    <>
      <MetaData
        title="Hydralite"
        description="Hydralite is the new open source platform for project management and open source project discovery."
        url="https://hydralite.io"
        keywords="open source,hydralite,project management"
      />
      {/* <ProjectLayout selected="feed"> */}
        {/* <div className="flex h-full"> */}
          {/* <Feed /> */}
          {/* <Sidebar /> */}
        {/* </div> */}
      {/* </ProjectLayout> */}
    </>
  );
};

export default ProjectFeed;
