import styles from '../styles/Project.module.scss'
import Meta from '~/components/Meta'
import React from 'react'
import { ProjectLayout } from 'hoc/ProjectLayout/ProjectLayout'

const Project = () => {
    return (
        <div className={styles.project}>
            <ProjectLayout
                name="Project Hydralite"
                members={120}

                logo="/logo.png"
            >
                
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