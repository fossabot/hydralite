import Meta from "partials/Meta";
import React from "react";
import { ProjectLayout } from "hoc/ProjectLayout/ProjectLayout";

import { FlagIcon, HornIcon, PersonIcon, GotoIcon } from "~/components/Icons";
import { UseApiConnection } from "~/hoc/api/UseApiConnection";
import { useConn } from "~/hoc/api/useConn";
import { gql } from "@apollo/client";

const WelcomeWidget: React.FC<{
  color: string;
  Icon: any;
  title: string;
  description: string;
  contentClassName?: string;
}> = ({ color, Icon, title, description, contentClassName }) => {
  return (
    <div className="flex items-center justify-between h-28 w-160 bg-white-selected rounded-10 m-3 cursor-pointer select-none">
      <div className="flex items-center">
        <div
          className="grid place-items-center rounded-full h-14 w-14 mx-7"
          style={{ backgroundColor: color }}
        >
          <div className="h-7 w-7">{Icon}</div>
        </div>
        <div
          className={`flex flex-col justify-between items-start box-border py-1 ${contentClassName}`}
        >
          <div className="font-semibold text-xl">{title}</div>
          <div className="text-base leading-5">{description}</div>
        </div>
      </div>
      <div className="flex justify-center items-center w-12 h-12 mr-6 rounded-10 hover:bg-white-hover-select">
        <div className="w-7 h-7">
          <GotoIcon />
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const conn = useConn();

  if (conn) {
    // this is just an example on how to query data from the api
    conn.query({
      query: gql`
        query ReadAllPostCommentsQuery($readAllPostCommentsArgs: ReadAllPostCommentsArgs!) {
          readAllPostComments(args: $readAllPostCommentsArgs) {
            id
            body
            creatorId
            edited
            createdAt
            updatedAt
            likes
          }
        }
      `,
      variables: {
        readAllPostCommentsArgs: {
          postId: "ea356fb9-4643-4d47-8d46-8e121f7e01a0"
        }
      }
    }).then(v => console.log(v));
  }

  return (
    <ProjectLayout selected={"home"} centerContent={true}>
      <div>
        <h2 className="text-4xl font-black mb-3 text-center">
          Welcome to{" "}
          <span
            style={{
              background:
                "linear-gradient(180deg, #15DB74 0%, #06A688 49.85%, #0EBD75 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Volt
          </span>
        </h2>
        <h3 className="text-xl font-semibold text mb-7 text-center">
          Welcome to your shiny new project. Here’s <br /> some tips to get
          you setup.
        </h3>
        <WelcomeWidget
          color="#FFA2D4"
          Icon={<PersonIcon />}
          title="Invite your team"
          description="Get your teammates on board, and let the collaboration begin."
          contentClassName="w-96"
        />
        <WelcomeWidget
          color="#FFA1A1"
          Icon={<FlagIcon />}
          title="Start developing"
          description="Go ahead and start building your project roadmap, View project traffic, and more"
          contentClassName="w-96"
        />
        <WelcomeWidget
          color="#A2B1FF"
          Icon={<HornIcon />}
          title="Publicize your project"
          description="Let others discover your project through hydra. Onboard potential contributors, all through one seamless platform."
          contentClassName="w-112"
        />
      </div>
    </ProjectLayout>
  );
};

const HomePage = () => {
  return (
    <>
      <Meta
        title="Hydralite"
        description="Hydralite is the new open source platform for project management and open source project discovery."
        url="https://hydralite.io"
        keywords="open source,hydralite,project management"
      />
      <UseApiConnection>
        <Home />
      </UseApiConnection>
    </>
  );
};

export default HomePage;
