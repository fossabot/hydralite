import React, { useEffect, useState } from "react";
import Skeleton from "../../hoc/Skeleton/Skeleton";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { serverUrl } from "../../utils/constants";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
interface IRepoData {
  repo: [];
  setGitRepo: any;
}
function RepoDropDown(props: IRepoData) {
  if (props.repo !== null) {
    if (props.repo.length != 0 && props.repo !== undefined) {
      return (
        <Menu as="div" className="relative inline-block text-left mt-7 ml-5">
          <div>
            <Menu.Button className="inline-flex justify-between w-full bg-[#2E374A] rounded-md shadow-sm px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              <div>{props.repo[0].name}</div>
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute overflow right-0 mt-2 w-full rounded-md shadow-lg bg-[#2E374A] ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {props.repo.map((val) => {
                  return (
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          onClick={()=>props.setGitRepo(val.name)}
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100 text-black" : "text-white",
                            "flex items-center gap-2 px-4 py-2 text-sm "
                          )}
                        >
                          {val.name}
                        </a>
                      )}
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      );
    }else{
      return <>No repositories found</>
    }
  } else {
    return <>No repositories found</>;
  }
}

function OrgDropDown({ orgs, user, setGitUser }) {
  return (
    <Menu as="div" className="relative inline-block text-left mt-7">
      <div>
        <Menu.Button className="inline-flex justify-between w-full bg-[#2E374A] rounded-md shadow-sm px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <div className="flex gap-2 items-center">
            <Image
              src={user.avatarUrl}
              className="rounded-xl"
              width="25%"
              height="25%"
            ></Image>
            {user.name}
          </div>
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-[#2E374A] ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {orgs.map((val) => {
              return (
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-black" : "text-white",
                        "flex items-center gap-2 px-4 py-2 text-sm "
                      )}
                      onClick={()=>setGitUser(val.name)}
                    >
                      <Image
                        src={val.avatarUrl}
                        className="rounded-xl"
                        width="25%"
                        height="25%"
                      ></Image>
                      {val.name}
                    </a>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

const Tabs = ({ tab, setTab }) => {
  return (
    <ul className="cursor-pointer grid grid-cols-3 gap-4 mt-8 select-none h-2">
      <div
        className={`w-full transition-colors duration-300 ${
          tab === "provider" ? "bg-dark-color-accent" : "bg-gray-700"
        } rounded-xl h-2 relative`}
        onClick={() => setTab("provider")}
      >
        <span className="absolute mt-4 font-semibold font-montserrat">
          1. Choose a provider
        </span>
      </div>
      <div
        className={`w-full transition-colors duration-300 ${
          tab === "repo" ? "bg-dark-color-accent" : "bg-gray-700"
        } rounded-xl h-2 relative`}
        onClick={() => setTab("repo")}
      >
        <span className="absolute mt-4 font-semibold font-montserrat">
          2. Pick a repository
        </span>
      </div>
      <div
        className={`w-full transition-colors duration-300 ${
          tab === "details" ? "bg-dark-color-accent" : "bg-gray-700"
        } rounded-xl h-2 relative`}
        onClick={() => setTab("details")}
      >
        <span className="absolute mt-4 font-semibold font-montserrat">
          3. Project details
        </span>
      </div>
    </ul>
  );
};

const Provider = ({ setTab }) => {
  return (
    <div className="w-full h-auto flex items-center justify-center p-24 font-montserrat">
      <div className="bg-[#282E3B] w-full h-full drop-shadow-md rounded-md">
        <div className="p-6">
          <h2 className="font-bold lg:text-3xl md:text-xl">
            Import an existing repository.
          </h2>
          <h5 className="font-semibold mt-2">
            Don’t have a repository? We’ll create one for you, so you can{" "}
            <span
              className="text-dark-color-accent cursor-pointer"
              onClick={() => setTab("details")}
            >
              skip this step.
            </span>
          </h5>
          <div className="flex items-center pt-10 justify-between gap-2">
            {/* Style all of these components */}
            <div className="gap-2 flex">
              <button
                onClick={() => {
                  GetGHToken("github");
                }}
              >
                Github
              </button>
              <button>GitLab</button>
              <button>BitBucket</button>
            </div>
            <div>
              <button>Skip</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Repository = ({ setTab, accessToken, setGitUser, setGitRepo  }) => {
  const [orgs, SetOrgs] = useState(null);
  const [repo, SetRepo] = useState(null);
  useEffect(() => {
    axios
      .post(`${serverUrl}/api/auth/github/callback/project/getOrgs`, {
        accessToken: accessToken,
      })
      .then((resp) => {
        console.log(resp.data);
        SetOrgs(resp.data);
      })
      .catch((e) => console.log(e));
    axios
      .post(`${serverUrl}/api/auth/github/callback/project/getRepo`, {
        accessToken: accessToken,
      })
      .then((resp) => {
        console.log(resp.data);
        SetRepo(resp.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="w-full h-auto flex items-center justify-center p-24 font-montserrat">
      <div className="bg-[#282E3B] w-full h-full drop-shadow-md rounded-md">
        <div className="p-6">
          <h2 className="font-bold lg:text-3xl md:text-xl">
            Pick a repository
          </h2>
          <h5 className="font-semibold mt-2">
            Don’t have a repository?
            <span
              className="text-dark-color-accent cursor-pointer"
              onClick={() => setTab("details")}
            >
              {" "}
              Skip this step.
            </span>
          </h5>
          <div className="grid grid-cols-2">
            {orgs != null ? (
              <OrgDropDown user={orgs[0]} orgs={orgs} setGitUser={setGitUser} />
            ) : (
              <div></div>
            )}
            <RepoDropDown repo={repo} setGitRepo={setGitRepo} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Details = ({gitUser, gitRepo, setGitUser, setGitRepo}) => {
  return (
    <h1>{gitUser}/{gitRepo}</h1>
  )
}

const GetGHToken = (name: string) => {
  axios
    .get(`${serverUrl}/api/auth/import/${name}`)
    .then((resp) => (window.location = resp.data as any));
};
export default function CreateProject() {
  const [GitUser, SetGitUser] = useState("")
  const [GitRepo, SetGitRepo] = useState("")
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
              <Repository accessToken={accessToken} setTab={setTab} setGitUser={SetGitUser} setGitRepo={SetGitRepo} />
            ) : (
              <span></span>
            )}
            {tab === "details" ? <Details setGitRepo={SetGitRepo} gitRepo={GitRepo} gitUser={GitUser}  setGitUser={SetGitUser} /> : <span></span>}
          </div>
        </div>
        <div className="h-96"></div>
      </div>
    </Skeleton>
  );
}
