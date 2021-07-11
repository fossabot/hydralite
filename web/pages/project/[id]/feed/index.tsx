import React from "react";
import { ProjectLayout } from "~/hoc/ProjectLayout/ProjectLayout";
import MetaData from "~/partials/Meta";
import { Sidebar } from "~/components/ProjectFeed/Sidebar/Sidebar";

const Feed = () => {
  return (
    <>
      <MetaData
        title="Hydralite"
        description="Hydralite is the new open source platform for project management and open source project discovery."
        url="https://hydralite.io"
        keywords="open source,hydralite,project management"
      />
      <ProjectLayout selected="feed">
        <Sidebar />
      </ProjectLayout>
    </>
  );
};

export default Feed;
