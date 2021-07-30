import React from "react";
import { Feed } from "~/components/ProjectFeed/Feed/Feed";
import { UseApiConnection } from "~/hoc/api/UseApiConnection";
import Layout from "~/hoc/Layout/Layout";
import MetaData from "~/partials/Meta";

const ProjectFeed = () => {
  return (
    <>
      <MetaData
        title="My Cool Project - Feed"
        description="Hydralite is the new open source platform for project management and open source project discovery."
        url="https://hydralite.io"
        keywords="open source,hydralite,project management"
      />
      <UseApiConnection>
        <Layout
          includeProjectSidebar={true}
          activeProjectId="1"
          activeProjectSidebarLink="Feed"
        >
          <Feed />
        </Layout>
      </UseApiConnection>
    </>
  );
};

export default ProjectFeed;
