import styles from 'styles/Project.module.scss'
import style from 'hoc/ProjectLayout/ProjectLayout.module.scss'
import Meta from '~/components/Meta'
import React from 'react'
import { ProjectLayout } from 'hoc/ProjectLayout'
import { useRouter } from 'next/router'
import { Pages } from 'hoc/ProjectLayout/pages'
import { Case } from '~/components/Switch/Case'
import { Switch } from '~/components/Switch/Switch'
import { FlagIcon, GotoIcon, HornIcon, PersonIcon } from '~/components/Icons'

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
                    <Case key="home">
                        <h2 className={style.homeTitle}>Welcome to <span style={{ color: '#695CFF' }}>{project}</span></h2>
                        <h3 className={style.homeHeader}>Welcome to your shiny new project. Here’s some tips to get you setup.</h3>

                        <div className={style.homeWidgetWrapper}>
                            <div className={style.homeWidget}>
                                <div className={style.homeWidgetIcon} style={{ backgroundColor: '#FFA2D4' }}><PersonIcon /></div>
                                <div className={style.homeWidgetContent}>
                                    <div className={style.homeWidgetTitle}>Invite your team</div>
                                    <div className={style.homeWidgetText}>Get your teammates on board, and let the collaboration begin.</div>
                                </div>
                            </div>
                            <div className={style.homeGoto}><GotoIcon /></div>
                        </div>
                        <div className={style.homeWidgetWrapper}>
                            <div className={style.homeWidget}>
                                <div className={style.homeWidgetIcon} style={{ backgroundColor: '#A2B1FF' }}><HornIcon /></div>
                                <div className={style.homeWidgetContent}>
                                    <div className={style.homeWidgetTitle}>Publicize your project</div>
                                    <div className={style.homeWidgetText} style={{ width: 460 }}>Let others discover your project through hydra. Onboard potential contributors, all through one seamless platform.</div>
                                </div>
                            </div>
                            <div className={style.homeGoto}><GotoIcon /></div>
                        </div>
                        <div className={style.homeWidgetWrapper}>
                            <div className={style.homeWidget}>
                                <div className={style.homeWidgetIcon} style={{ backgroundColor: '#FFA1A1' }}><FlagIcon /></div>
                                <div className={style.homeWidgetContent}>
                                    <div className={style.homeWidgetTitle}>Start developing</div>
                                    <div className={style.homeWidgetText}>Go ahead and start building your project roadmap, View project traffic, and more</div>
                                </div>
                            </div>
                            <div className={style.homeGoto}><GotoIcon /></div>
                        </div>
                        <div style={{ marginBottom: 100 }}></div>
                    </Case>
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