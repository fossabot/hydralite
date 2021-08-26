import React from "react";
import { Dialog } from "@headlessui/react";
import { serverUrl } from "~/constants/global";
import GitLabIcon from "~/icons/solid/GitLabIcon";
import GitHubIcon from "~/icons/solid/GitHubIconSolid";
import GoogleIcon from "~/icons/solid/GoogleIconSolid";
import BitbucketIcon from "~/icons/solid/BitbucketIcon";
import Modal from "~/components/Modal/Modal";

interface LoginButtonProps {
  icon: React.ReactNode;
  title: string;
  provider: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  icon,
  title,
  provider,
}: LoginButtonProps) => (
  <button
    type="button"
    className="
    w-full flex group
    items-center justify-center
    space-x-4 py-4
    rounded-2xl outline-none
    bg-acrylic-10 hover:bg-acrylic-20
    active:bg-acrylic-10 active:ring active:ring-iris-40
    focus:ring focus:ring-iris-40
    dark:bg-acrylic-70 dark:hover:bg-acrylic-60
    dark:active:bg-acrylic-70 dark:active:ring-iris-30
    dark:focus:ring dark:focus:ring-iris-30
    "
    onClick={async () => {
      window.location.href = (
        await (await fetch(`${serverUrl}/api/auth/${provider}`)).json()
      ).url;
    }}
  >
    <div className="w-5 h-5 fill-current text-acrylic-70 group-active:text-iris-40 group-focus:text-iris-40 dark:text-white dark:group-active:text-iris-30 dark:group-focus:text-iris-30">
      {icon}
    </div>
    <span className="text-base font-bold text-acrylic-70 dark:text-white">
      {title}
    </span>
  </button>
);

const Signup: React.FC = () => (
  <Modal>
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col space-y-6">
        <Dialog.Title
          as="h3"
          className="text-acrylic-70 dark:text-white text-2xl leading-6 font-bold"
        >
          Join <span className="text-iris-40 dark:text-iris-30">Hydralite</span>{" "}
          with...
        </Dialog.Title>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-2 justify-items-center">
          <LoginButton icon={<GoogleIcon />} title="Google" provider="google" />
          <LoginButton icon={<GitHubIcon />} title="GitHub" provider="github" />
          <LoginButton
            icon={<BitbucketIcon />}
            title="BitBucket"
            provider="bitbucket"
          />
          <LoginButton
            icon={<GitLabIcon />}
            title="GitLab"
            provider="gitlab"
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <span>
          By joining, you accept our
          <a href="#"> Terms and Conditions </a>
          and
          <a href="#"> Privacy Policy</a>.
        </span>
      </div>
    </div>
  </Modal>
);

export default Signup;
