import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { serverUrl } from "~/constants/global";

// const error = (txt: string) => toast.error(txt);
const success = (txt: string) => toast.success(txt);

function TextField({ name, optional, placeholder, thumbTxt, title, setTxt }) {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 text-left"
      >
        {name}{" "}
        <span className="to-acrylic-30">{optional ? " (optional) " : ""}</span>
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        {thumbTxt !== "" ? (
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
            {thumbTxt}
          </span>
        ) : (
          <span />
        )}
        <input
          type="text"
          name={name}
          onInput={(e) => setTxt(title, e.currentTarget.value)}
          id={name}
          className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 sm:text-sm focus:outline-none focus:ring focus:border-blue-300"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

const NewProject: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [github, setGithub] = useState("");
  const setText = (newName: string, text: string) => {
    if (newName === "name") {
      setName(text);
    } else if (newName === "description") {
      setDescription(text);
    } else if (newName === "github") {
      setGithub(text);
    }
  };
  const submit = (event) => {
    event.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    axios
      .post(
        `${serverUrl}/api/projects/createProject`,
        {
          name,
          description,
          githubRepo: `github.com/${github}`,
        },
        {
          headers: { authorization: `bearer ${accessToken}` },
        }
      )
      .then((res) => {
        const { error } = res.data;
        if (error) {
          error(error);
        } else {
          success(`Successfully created ${name}`);
        }
      })
      .catch((e) => console.log(e));
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        auto-reopen="true"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Toaster />
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-md px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mt-1 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-4xl leading-3 font-light text-gray-900"
                  >
                    Create a new{" "}
                    <span className="text-accent font-semibold">Project</span>
                  </Dialog.Title>
                  <div className="py-4 flex align-middle justify-start  w-full flex-col">
                    <TextField
                      name="Import repo"
                      optional
                      placeholder="voltpkg/volt"
                      thumbTxt="github.com/"
                      title="github"
                      setTxt={setText}
                    />
                    <div className="mt-1" />
                    <TextField
                      name="Name"
                      optional={false}
                      placeholder="volt"
                      thumbTxt=""
                      title="name"
                      setTxt={setText}
                    />
                    <div className="mt-1" />
                    <TextField
                      name="Description"
                      optional
                      placeholder="Volt is a fast NodeJS Package Manager"
                      thumbTxt=""
                      title="description"
                      setTxt={setText}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-dark-color-accent text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                  onClick={submit}
                >
                  Continue
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default NewProject;
