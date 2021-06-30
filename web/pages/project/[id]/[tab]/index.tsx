import styles from '../../../../styles/Project.module.scss'
import Meta from '~/components/Meta'
import React from 'react'
import { ProjectLayout } from 'hoc/ProjectLayout'
import { useRouter } from 'next/router'
import { Pages } from 'hoc/ProjectLayout/pages'
import { Case } from '~/components/Switch/Case'
import { Switch } from '~/components/Switch/Switch'

const Project = () => {
    const router = useRouter();
    const { id, tab } = router.query;

    const project = typeof id === 'string' ? id : '';
    const selected = Pages.find(v => v == tab) ?? 'home';
    if (tab && selected != tab && typeof window !== 'undefined') router.replace(selected);

    return (
        <div className={styles.project}>
            <ProjectLayout {...{selected, project}} >
                <Switch value={selected}>
                    <Case key="home">Home</Case>
                    <Case key="groups">Groups</Case>
                    <Case key="roadmap">Roadmap</Case>
                    <Case key="tasks">Tasks</Case>
                    <Case key="meetings">Meetings</Case>
                    <Case key="outsource">Outsource</Case>
                    <Case key="develop">Develop</Case>
                    <Case key="insights">Insights</Case>
                    <Case key="more">More</Case>
                    <Case key="hydra">Hydra</Case>
                    <Case key="settings">Settings</Case>
                </Switch>
            </ProjectLayout>
            <Meta
                title="Hydralite"
                description="Hydralite is the new open source platform for project management and open source project discovery."
                url="https://hydralite.io"
                keywords="open source,hydralite,project management"
            />
        </div>
    )
}

export default Project