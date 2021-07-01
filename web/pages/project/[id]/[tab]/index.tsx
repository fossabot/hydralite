import styles from "~/hoc/ProjectLayout/ProjectLayout.module.scss";
import Meta from "partials/Meta";
import React from "react";
import { ProjectLayout } from "hoc/ProjectLayout/ProjectLayout";
import { useRouter } from "next/router";
import { projectPages } from "~/constants/projectPages";

const Project = () => {
  const router = useRouter();
  const { id, tab } = router.query;

  const project = typeof id === "string" ? id : "";
  const selected = projectPages.find((page) => page == tab) ?? "home";
  if (tab && selected != tab && typeof window !== "undefined") router.replace(selected);

  return (
    <>
      <Meta
        title="Hydralite"
        description="Hydralite is the new open source platform for project management and open source project discovery."
        url="https://hydralite.io"
        keywords="open source,hydralite,project management"
      />
      <div className={styles.project}>
        <ProjectLayout selected={selected} project={project}>
          <h2 className={styles.homeTitle}>Nothing Here?</h2>
          <h3 className={styles.homeHeader}>
            This page is empty because no one has designed it yet
          </h3>
        </ProjectLayout>
      </div>
    </>
  );
};

export default Project;
