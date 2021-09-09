import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import GithubIcon from "../../icons/solid/GitHubIconSolid";
import GitLabIcon from "../../icons/solid/GitLabIcon";
import GoogleIcon from "../../icons/solid/GoogleIconSolid";
import BitBucketIcon from "../../icons/solid/BitbucketIcon";
import Modal from "../Modals/Modal";
import axios from "axios";
import { serverUrl } from "../../utils/constants";

interface LoginButtonProps {
  icon: React.ReactNode;
  title: string;
  provider: string;
}

const Button: React.FC<LoginButtonProps> = ({
  icon,
  title,
  provider,
}: LoginButtonProps) => {
  let styles = "";
  if (provider === "google") {
    styles = `${styles} mr-4`;
  }
  return (
    <div className="w-full montserrat  sm:my-1 align-middle justify-center">
      <button
        type="button"
        className="
    w-full inline-flex sm:py-3 monteserrat h-full justify-center rounded-lg border  shadow-sm px-1 py-2 bg-acrylic-10 text-base font-medium text-gray-700 hover:shadow-md duration-200 hover:bg-gray-50  focus:outline-none  sm:text-sm
    "
        onClick={async () => {
          axios.get(`${serverUrl}/api/auth/${provider}`).then((e) => window.location = e.data as any)
        }}
      >
        <div
          className={`w-5 mr-3 h-5  fill-current text-acrylic-70 group-active:text-iris-40 group-focus:text-iris-40 dark:group-active:text-iris-30 dark:group-focus:text-iris-30 ${styles}`}
        >
          {icon}
        </div>
        <span className="text-base font-bold text-acrylic-70">{title}</span>
      </button>
    </div>
  );
};

export default function Example({ isopen, setIsOpen }) {
  const closeModal = () => setIsOpen(false);

  return (
    <Modal isOpen={isopen} setIsOpen={closeModal}>
      <div>
        <div className="mt-1 text-center sm:mt-5">
          <Dialog.Title
            as="h3"
            className="text-3xl font-medium leading-6 text-gray-700 monteserrat sm:pb-4"
          >
            Join{" "}
            <span className="text-dark-color-accent font-extrabold">
              Hydralite
            </span>{" "}
          </Dialog.Title>
        </div>
      </div>
      <div className="mt-5 sm:mt-6 sm:mx-3 sm:grid sm:grid-cols-2 sm:gap-2 sm:grid-flow-row-dense">
        <Button provider="google" title="Google" icon={<GoogleIcon />}></Button>
        <Button provider="github" title="Github" icon={<GithubIcon />}></Button>
        <Button
          provider="bitbucket"
          title="BitBucket"
          icon={<BitBucketIcon />}
        ></Button>
        <Button provider="gitlab" title="GitLab" icon={<GitLabIcon />}></Button>
      </div>
      <div className="mt-5 w-full ">
        <p className="text-sm text-center sm:pt-2 text-gray-700 monteserrat">
          By continuing you accept our{" "}
          <span className="text-dark-color-accent font-bold">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-dark-color-accent font-bold">
            Privacy Policy
          </span>
        </p>
      </div>
    </Modal>
  );
}
