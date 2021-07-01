import styles from "~/hoc/ProjectLayout/ProjectLayout.module.scss";
import Meta from "~/components/Meta";
import React from "react";
import { ProjectLayout } from "hoc/ProjectLayout/ProjectLayout";
import { useRouter } from "next/router";
import { Case } from "~/components/Switch/Case";
import { Switch } from "~/components/Switch/Switch";
import {
  FlagIcon,
  GotoIcon,
  HornIcon,
  PersonIcon,
  UseableIcon,
} from "~/components/Icons";
import { projectPages } from "~/constants/projectPages";

const WelcomeWidget: React.FC<{ color: string; icon: typeof UseableIcon }> = ({
  color,
  icon,
  children,
}) => {
  const iconHolder = { icon };

  return (
    <div className={styles.homeWidgetWrapper}>
      <div className={styles.homeWidget}>
        <div
          className={styles.homeWidgetIcon}
          style={{ backgroundColor: color }}
        >
          {<iconHolder.icon />}
        </div>
        <div className={styles.homeWidgetContent}>{children}</div>
      </div>
      <div className={styles.homeGoto}>
        <GotoIcon />
      </div>
    </div>
  );
};

const HomePage: React.FC<{ name: string }> = ({ name }) => {
  return (
    <>
      <h2 className={styles.homeTitle}>
        Welcome to <span className="text-green-700">Volt</span>
      </h2>
      <h3 className={styles.homeHeader}>
        Welcome to your shiny new project. Here’s some tips to get you setup.
      </h3>

      <WelcomeWidget color="#FFA2D4" icon={PersonIcon}>
        <h4 className={styles.homeWidgetTitle}>Invite your team</h4>
        <div className={styles.homeWidgetText}>
          Get your teammates on board, and let the collaboration begin.
        </div>
      </WelcomeWidget>
      <WelcomeWidget color="#A2B1FF" icon={HornIcon}>
        <h4 className={styles.homeWidgetTitle}>Publicize your project</h4>
        <h5 className={styles.homeWidgetText} style={{ width: 460 }}>
          Let others discover your project through hydra. Onboard potential
          contributors, all through one seamless platform.
        </h5>
      </WelcomeWidget>
      <WelcomeWidget color="#FFA1A1" icon={FlagIcon}>
        <h4 className={styles.homeWidgetTitle}>Start developing</h4>
        <h5 className={styles.homeWidgetText}>
          Go ahead and start building your project roadmap, View project
          traffic, and more
        </h5>
      </WelcomeWidget>

      <div style={{ marginBottom: 100 }}></div>
    </>
  );
};

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
        <ProjectLayout {...{ selected, project }}>
          <Switch value={selected}>
            <Case key="home">
              <HomePage name={project} />
            </Case>
            <Case key="groups" nextValue></Case>
            <Case key="roadmap" nextValue></Case>
            <Case key="tasks" nextValue></Case>
            <Case key="meetings" nextValue></Case>
            <Case key="outsource" nextValue></Case>
            <Case key="develop" nextValue></Case>
            <Case key="insights" nextValue></Case>
            <Case key="more" nextValue></Case>
            <Case key="hydra" nextValue></Case>
            <Case key="settings" nextValue></Case>
            <Case default>
              <h2 className={styles.homeTitle}>Nothing Here?</h2>
              <h3 className={styles.homeHeader}>
                This page is empty because no one has designed it yet
              </h3>
            </Case>
          </Switch>
        </ProjectLayout>
      </div>
    </>
  );
};

export default Project;
