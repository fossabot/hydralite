import styles from "~/hoc/ProjectLayout/ProjectLayout.module.scss";
import Meta from "partials/Meta";
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

const WelcomeWidget: React.FC<{
  color: string;
  icon: typeof UseableIcon;
  title: string;
  description: string;
  contentClassName?: string;
}> = ({ color, icon, title, description, contentClassName }) => {
  const iconHolder = { icon };

  return (
    <div className="flex items-center justify-between h-28 w-120 bg-white-selected rounded-20 m-2 cursor-pointer select-none">
      <div className="flex items-center">
        <div
          className="grid place-items-center rounded-full h-16 w-16 mx-5"
          style={{ backgroundColor: color }}
        >
          {<iconHolder.icon />}
        </div>
        <div className={`flex flex-col justify-between items-start h-16 ${contentClassName}`}>
          <h4 className="font-bold text-lg">{title}</h4>
          <p className={"text-semibold text-md"}>{description}</p>
        </div>
      </div>
      <div className="flex justify-center items-center w-12 h-12 mr-10 rounded-10 hover:bg-white-hover-select">
        <div className="w-10 h-10">
          <GotoIcon />
        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="w-full h-full grid place-items-center">
      <div className="">
        <h2 className="text-4xl font-black mb-3 text-center">
          Welcome to <span className="text-green-700">Volt</span>
        </h2>
        <h3 className="text-xl font-semibold text mb-7 text-center">
          Welcome to your shiny new project. Here’s some tips to get you setup.
        </h3>

        <WelcomeWidget
          color="#FFA2D4"
          icon={PersonIcon}
          title="Invite your team"
          description="Get your teammates on board, and let the collaboration begin."
          contentClassName="w-96"
        />
        <WelcomeWidget
          color="#A2B1FF"
          icon={HornIcon}
          title="Publicize your project"
          description="Let others discover your project through hydra. Onboard potential contributors, all through one seamless platform."
          contentClassName="w-112"
        />
        <WelcomeWidget
          color="#FFA1A1"
          icon={FlagIcon}
          title="Start developing"
          description="Go ahead and start building your project roadmap, View project traffic, and more"
          contentClassName="w-96"
        />
      </div>
    </div>
  );
};

const Project = () => {
  const router = useRouter();
  const { id, tab } = router.query;

  const project = typeof id === "string" ? id : "";
  const selected = projectPages.find((page) => page == tab) ?? "home";
  if (tab && selected != tab && typeof window !== "undefined")
    router.replace(selected);

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
