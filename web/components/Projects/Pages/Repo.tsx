import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";
import { serverUrl } from "../../../utils/constants";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
interface IRepoData {
  name: string;
}
interface IReposData {
  repo: IRepoData[];
  setGitRepo: any;
}

function RepoDropDown(props: IReposData) {
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
                          onClick={() => props.setGitRepo(val.name)}
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
    } else {
      return <>No repositories found</>;
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
                      onClick={() => setGitUser(val.name)}
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

export const Repository = ({ setTab, accessToken, setGitUser, setGitRepo }) => {
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
