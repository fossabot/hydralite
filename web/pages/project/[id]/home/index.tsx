import styles from "~/hoc/ProjectLayout/ProjectLayout.module.scss";
import Meta from "partials/Meta";
import React from "react";
import { ProjectLayout } from "hoc/ProjectLayout/ProjectLayout";
import { useRouter } from "next/router";
import { HomePage } from "~/components/ProjectLayout/pages/HomePage";

const Project = () => {
    const router = useRouter();
    const { id } = router.query;
    const project = typeof id === "string" ? id : "";

    return (
        <>
            <Meta
                title="Hydralite"
                description="Hydralite is the new open source platform for project management and open source project discovery."
                url="https://hydralite.io"
                keywords="open source,hydralite,project management"
            />
            <div className={styles.project}>
                <ProjectLayout selected={'home'} project={project}>
                    <HomePage name={project} />
                </ProjectLayout>
            </div>
        </>
    );
};

export default Project;
