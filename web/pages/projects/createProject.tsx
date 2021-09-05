import React, { useEffect, useState } from "react";
import Skeleton from "../../hoc/Skeleton/Skeleton";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import NewWindow from "react-new-window";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function RepoDropDown() {
  let repo = [
    {
      name: "hydralite",
    },
    {
      name: "joule.rs",
    },
  ];
  return (
    <Menu as="div" className="relative inline-block text-left mt-7 ml-5">
      <div>
        <Menu.Button className="inline-flex justify-between w-full bg-[#2E374A] rounded-md shadow-sm px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <div>{repo[0].name}</div>
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
        <Menu.Items className="origin-top-right absolute overflow right-0 mt-2 w-full rounded-md shadow-lg bg-[#2E374A] ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {repo.map((val) => {
              return (
                <Menu.Item>
                  {({ active }) => (
                    <a
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
}

const Window = () => {
  return <NewWindow><h1>asdsad</h1></NewWindow>;
};

function OrgDropDown() {
  let user = {
    name: "VarunPotti",
    avatarUrl: "https://avatars.githubusercontent.com/u/77481923?v=4",
  };
  let orgs = [
    {
      name: "hydralite",
      avatarUrl: "https://avatars.githubusercontent.com/u/81620813?v=4",
    },
    {
      name: "zetalang",
      avatarUrl: "https://avatars.githubusercontent.com/u/85721934?v=4",
    },
    {
      name: "jsx-one",
      avatarUrl: "https://avatars.githubusercontent.com/u/86122399?v=4",
    },
  ];
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
              <NewWindow><h1>asdsad</h1></NewWindow>
              {/* <button onClick={() => (
              )}>Github</button> */}
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

const Repository = ({ setTab }) => {
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
            <OrgDropDown />
            <RepoDropDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CreateProject() {
  const [tab, setTab] = useState("provider");
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
            {tab === "repo" ? <Repository setTab={setTab} /> : <span></span>}
            {tab === "details" ? <div>Repo</div> : <span></span>}
          </div>
        </div>
        <div className="h-96"></div>
      </div>
    </Skeleton>
  );
}
