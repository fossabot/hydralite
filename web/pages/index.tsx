import React, { useContext } from "react";
import Meta from "~/partials/Meta";
import Layout from "~/hoc/Layout/Layout";
import NewProject from "~/components/Projects/NewProjectModal"
import router from "next/router";
import { AuthContext } from "~/util/auth";
import Signup from "~/components/Signup/SignupPage";

export default function Home() {

  const { loggedIn, serverPresent, user } = useContext(AuthContext);
  if (loggedIn !== null) {
    if (loggedIn) {
      return (
          <Layout activeTab="Home">
            
            <NewProject />
            <Meta
              title="Hydralite - Home"
              description="Hydralite is the new open source platform for project management and open source project discovery."
              url="https://hydralite.io"
              keywords="open source,hydralite,project management"
            />
          </Layout>
      );
    } else {
      return <Signup />;
    }
  } else {
    return <h1>Loading</h1>;
  }
}