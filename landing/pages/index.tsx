import React, { useRef } from "react";
import TextLoop from "react-text-loop";
import scrollToRef from "util/scrollToRef";
import Button from "~/components/Button/Button";
import styles from "~/styles/index.module.css";
import { projectName } from "~/constants";
import SectionOne from "~/components/Landing/SectionOne";
import SectionTwo from "~/components/Landing/SectionTwo";
import Layout from "~/components/Layout";
import ConnectCard from "~/components/ConnectCard/ConnectCard";
import Meta from "~/components/Meta";

const Home = () => {
  const connectCardRef = useRef(null);
  const adjectives = ["Discover", "Develop", "Deliver", "Deploy"];
  return (
    <>
      <Meta
        title="Hydralite"
        description="Hydralite is the new open source platform for project management and open source project discovery."
        url="https://hydralite.io"
        keywords="open source,hydralite,project management, discover, project discovery, developers, developer"
      />
      <Layout navType="home" connectCardRef={connectCardRef}>
        <div className={styles.main}>
          <div className={styles.main__sub}>
            <h1 className={styles.main__text}>
              The Place for Developers <br />
              to{" "}
              <TextLoop interval={2000}>
                {adjectives.map((word, index) => (
                  <span key={index} className={styles.main__text_Gradient}>
                    {word}
                  </span>
                ))}
              </TextLoop>{" "}
              Software
            </h1>
            <p className={styles.main__description}>
              {projectName} is the new open source platform for project
              management and open source project discovery.
            </p>
            <div className={styles.main__buttons}>
              <Button
                text="View On Github"
                color="black"
                href="https://github.com/hydralite/hydralite"
              />

              <Button
                color="accent"
                text="Join Waitlist"
                onClick={() => scrollToRef(connectCardRef)}
              />
            </div>
          </div>
        </div>
        <SectionOne />
        <SectionTwo />
        <div ref={connectCardRef}>
          <ConnectCard />
        </div>
      </Layout>
    </>
  );
};

export default Home;
