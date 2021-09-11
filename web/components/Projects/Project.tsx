import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "../../hoc/Skeleton/Skeleton";

import { serverUrl } from "../../utils/constants";
import Provider from "./Pages/Provider";
import Repository from "./Pages/Repo";
import Tabs from "./Tabs";
import Details from "./Pages/Details";
import { Toaster } from "react-hot-toast";

const CreateProject: React.FC = () => {
  const [GitUser, SetGitUser] = useState(null);
  const [GitRepo, SetGitRepo] = useState(null);
  const [tab, setTab] = useState("provider");
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (
      !query ||
      !query.has("code") ||
      !query.has("state") ||
      !query.has("provider")
    ) {
      setTab("provider");
    } else {
      axios
        .get(
          `${serverUrl}/api/auth/import/callback/${query.get(
            "provider"
          )}?code=${query.get("code")}&state=${query.get("state")}`
        )
        .then((resp) => {
          setAccessToken(resp.data);
          setTab("repo");
        });
    }
  }, []);
  return (
    <Skeleton sidebar={false}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="h-[calc(100vh-3.5rem)] p-7 w-[100vw] flex items-center justify-center flex-col overflow-hidden">
        <h1 className="text-3xl font-montserrat font-medium">
          Create a new{" "}
          <span className="text-dark-color-accent font-extrabold">project</span>
        </h1>
        <div className="w-[80vw] h-[80vh]">
          <Tabs tab={tab} setTab={setTab} />
          <div className="mt-11">
            {tab === "provider" ? <Provider setTab={setTab} /> : <span />}
            {tab === "repo" ? (
              <Repository
                accessToken={accessToken}
                setTab={setTab}
                setGitUser={SetGitUser}
                setGitRepo={SetGitRepo}
              />
            ) : (
              <span />
            )}
            {tab === "details" ? (
              <Details
                // setGitRepo={SetGitRepo}
                gitRepo={GitRepo}
                gitUser={GitUser}
                setTab={setTab}
                // setGitUser={SetGitUser}
              />
            ) : (
              <span />
            )}
          </div>
        </div>
        <div className="h-96" />
      </div>
    </Skeleton>
  );
};
export default CreateProject;
