import React from "react";
import styles from "~/styles/index.module.css";

const SectionOne = () => {
  return (
    <div className={styles.sectionOne}>
      <div className={styles.sectionOne__main}>
        <img
          src="/vectors/project-management-illustration.svg"
          className={styles.project_management_vector}
          alt="project management"
        />
        <div className={styles.sectionOne__content}>
          <span className={styles.sectionOne__preHeading}>
            {"Intuitive, Fast, Powerful".toUpperCase()}
          </span>
          <h1 className={styles.sectionOne__heading}>Project Management</h1>
          <p
            className={styles.sectionOne__description}
            style={{ marginTop: "10px" }}
          >
            Hydralite enables easy, intuitive project management, and allows for
            efficient and highly collaborative feature planning, task
            management, developer and tester outsourcing, brainstorming
            sessions, tight third-party integration, inbuilt source control,
            project insights and loads more.
          </p>
        </div>
      </div>
      <div className={styles.sectionOne__featureContainer}>
        <div className={styles.sectionOne__feature}>
          <h3>{"Task Boards".toUpperCase()}</h3>
          <p>
            Seamlessly collaborate with task boards while enjoying effeciency
            and performance analytics for all your team members.Set priorities
            and deadlines for all your tasks so you can deliver software. Fast.
          </p>
        </div>
        <span className={styles.sectionOne__featureSeperator}></span>
        <div className={styles.sectionOne__feature}>
          <h3>{"Project Roadmap".toUpperCase()}</h3>
          <p>
            Track and manage features you want for your next release seamlessly
            through a roadmap. Quickly deploy the latest version of your
            software to your favourite providers with just 1 Click.
          </p>
        </div>
        <span className={styles.sectionOne__featureSeperator}></span>
        <div className={styles.sectionOne__feature}>
          <h3>{"Audio Rooms".toUpperCase()}</h3>
          <p>
            Collaborate with the other developers and your teammates and
            brainstorm the coolest features for your software. Use task boards
            to plan the features you need for your next release.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
