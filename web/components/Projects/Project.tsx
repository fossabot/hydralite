import React, { useEffect, useState } from "react";
import Skeleton from "../../hoc/Skeleton/Skeleton";

import axios from "axios";
import { serverUrl } from "../../utils/constants";
import { Provider } from "./Pages/Provider";
import { Repository } from "./Pages/Repo";
import { Tabs } from "./Tabs";
import { Details } from "./Pages/Details";

export default function CreateProject() {
  const [GitUser, SetGitUser] = useState("");
  const [GitRepo, SetGitRepo] = useState("");
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
      <div className="h-[calc(100vh-3.5rem)] p-7 w-[100vw] flex items-center justify-center flex-col overflow-hidden">
        <h1 className="text-3xl font-montserrat font-medium">
          Create a new{" "}
          <span className="text-dark-color-accent font-extrabold">project</span>
        </h1>
        <div className="w-[80vw] h-[80vh]">
          <Tabs tab={tab} setTab={setTab}></Tabs>
          <div className="mt-11">
            {tab === "provider" ? (
              <Provider setTab={setTab}></Provider>
            ) : (
              <span></span>
            )}
            {tab === "repo" ? (
              <Repository
                accessToken={accessToken}
                setTab={setTab}
                setGitUser={SetGitUser}
                setGitRepo={SetGitRepo}
              />
            ) : (
              <span></span>
            )}
            {tab === "details" ? (
              <Details
                setGitRepo={SetGitRepo}
                gitRepo={GitRepo}
                gitUser={GitUser}
                setGitUser={SetGitUser}
              />
            ) : (
              <span></span>
            )}
          </div>
        </div>
        <div className="h-96"></div>
      </div>
    </Skeleton>
  );
}
