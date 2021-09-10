import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import axios from "axios";

import React, { Fragment, useState } from "react";
import { serverUrl } from "../../../utils/constants";
interface IDetails {
  gitUser: any;
  gitRepo: any;
  setTab: any;
}
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Dropdown: React.FC<{ setIsPrivate; isPrivate }> = ({
  setIsPrivate,
  isPrivate,
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left mt-7">
      <div>
        <Menu.Button className="inline-flex justify-between w-[calc(100%-20%)] bg-[#2E374A] rounded-md shadow-sm px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <div className="flex gap-2 items-center">
            {isPrivate ? "Private" : "Public"}
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
            <Menu.Item key="private">
              {({ active }) => (
                <a
                  onClick={() => setIsPrivate(true)}
                  className={classNames(
                    active ? "bg-gray-100 text-black" : "text-white",
                    "flex items-center gap-2 px-4 py-2 text-sm "
                  )}
                >
                  Private
                </a>
              )}
            </Menu.Item>
            <Menu.Item key="private">
              {({ active }) => (
                <a
                  onClick={() => setIsPrivate(false)}
                  className={classNames(
                    active ? "bg-gray-100 text-black" : "text-white",
                    "flex items-center gap-2 px-4 py-2 text-sm "
                  )}
                >
                  Public
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const createProjectinDB = async (
  gitUser,
  gitRepo,
  pname,
  description,
  isPrivate,
  URI
) => {
  const id = localStorage.getItem("accessToken");
  await axios
    .post(
      `${serverUrl}/api/project/create`,
      {
        name: gitUser,
        isPrivate: isPrivate,
        url: URI,
        gitProject: `https://github.com/${gitUser}/${gitRepo}`,
        description: description,
      },
      {
        headers: {
          Authorization: `bearer ${id}`,
          "Access-Control-Allow-Origin": "http://localhost:8000",
        },
      }
    )
    .then(async (e) => {
      const resp = await e.data;
      console.log(resp);
      window.location.replace("/");
    });
};
const Details: React.FC<IDetails> = ({ gitUser, gitRepo, setTab }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const submit = () => {
    createProjectinDB(gitUser, gitRepo, name, description, isPrivate, url);
  };
  return (
    <div className="w-full h-auto flex items-center justify-center p-24 font-montserrat">
      <div className="bg-[#282E3B] w-full h-full drop-shadow-md rounded-md">
        <div className="p-6">
          <h2 className="font-bold lg:text-3xl md:text-xl">Project Details</h2>
          <h5 className="font-semibold mt-2">
            Already have a repository
            <span
              className="text-dark-color-accent cursor-pointer"
              onClick={() => setTab("provider")}
            >
              {" "}
              Import It
            </span>
          </h5>
          <div className="grid grid-cols-2 ">
            <div className="grid grid-rows-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  onInput={(e) => setName(e.currentTarget.value)}
                  placeholder="Name"
                  autoComplete="off"
                  className="px-3 py-3 placeholder-blueGray-30 h-9 text-blueGray-600 relative bg-dark-bg rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full focus:ring-dark-color-accent"
                />
              </div>
              <div>
                <label htmlFor="about" className="block text-sm font-medium">
                  About
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    onInput={(e) => setDescription(e.currentTarget.value)}
                    name="about"
                    rows={1}
                    className="shadow-sm bg-dark-bg focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Volt is a fast next-gen package manager"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-2 mx-3">
              <div>
                <label htmlFor="url" className="block text-sm font-medium">
                  Project URL
                </label>
                <div className="bg-[#2E374A] rounded-tl-md rounded-bl-md w-[calc(100%-20%)] flex text-center">
                  <span className="px-4 text-center pt-2">
                    hydralite.io/project/
                  </span>
                  <input
                    type="url"
                    onInput={(e) => {
                      setUrl(e.currentTarget.value);
                    }}
                    placeholder="varunp/myawesomeproj"
                    className="px-3 py-3 placeholder-blueGray-300 h-9 text-blueGray-600 relative bg-dark-bg rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full focus:ring-dark-color-accent"
                  />
                </div>
              </div>
              <Dropdown setIsPrivate={setIsPrivate} isPrivate={isPrivate} />
            </div>
          </div>
          <button
            className="py-2 m-3 px-5 bg-[#2E374A]"
            onClick={() => submit()}
          >
            Submit!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
