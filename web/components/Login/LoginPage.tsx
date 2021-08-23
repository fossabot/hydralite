import Meta from "partials/Meta";
import DiscordIcon from "~/icons/solid/DiscordIconSolid";
import GitHubIcon from "~/icons/solid/GitHubIconSolid";
import GoogleIcon from "~/icons/solid/GoogleIconSolid";
import TwitterIcon from "~/icons/solid/TwitterIconSolid";
import React from "react";
import { serverUrl } from "~/constants/global";

const NavLink = ({ href, active, children }) => {
  const style = ["font-bold"];
  if (active) style.push("text-accent");

  return (
    <li className="mx-6 my-2">
      <a href={href} className={style.join(" ")}>
        {children}
      </a>
    </li>
  );
};
const Navbar = () => {
  return (
    <nav
      className="flex items-center min-w-full"
      style={{ borderBottom: "1px solid #999" }}
    >
      <ul className="flex p-2">
        <NavLink href="login" active={true}>
          Login
        </NavLink>
        <NavLink href="signup" active={false}>
          Create account
        </NavLink>
      </ul>
    </nav>
  );
};

const LoginButton = ({ icon, title, provider }) => {
  const wrapper = { icon };

  return (
    <button
      className="flex items-center px-12 py-5 rounded-2xl hover:bg-white-selected bg-white-hover my-2 font-bold text-3xl text-text w-full"
      onClick={async () => {
        const url = await fetch(`${serverUrl}/api/auth/${provider}`)
          .then((v) => v.json())
          .then((v) => v.url);
        window.location.href = url;
      }}
    >
      <div style={{ width: 50, height: 50, marginRight: 60 }}>
        <wrapper.icon />
      </div>
      <div>Continue with {title}</div>
    </button>
  );
};
const LoginContent = () => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex flex-col items-center mt-8 mb-24">
        <h1 className="text-text mt-6 mb-1 font-extrabold text-5xl">
          Login to <span className="text-accent">Hydralite</span>
        </h1>
        <h4 className="text-text m-2 font-extrabold text-2xl">
          Discover. Develop. Deploy
        </h4>
      </div>
      <div className="flex flex-col items-center self-stretch mx-16">
        <LoginButton icon={GoogleIcon} title="Google" provider="google" />
        <LoginButton icon={GitHubIcon} title="Github" provider="github" />
        <LoginButton icon={TwitterIcon} title="Twitter" provider="twitter" />
        <LoginButton icon={DiscordIcon} title="Discord" provider="discord" />
      </div>
    </div>
  );
};

const Terms = () => {
  return (
    <p className="text-xl font-semibold text-gray_light mb-10">
      By continuing you, you agree to the{" "}
      <a href="#" className="text-accent font-extrabold">
        Terms of Service
      </a>
    </p>
  );
};

const Login = () => {
  return (
    <>
      <Meta
        title="Hydralite"
        description="Hydralite is the new open source platform for project management and open source project discovery."
        url="https://hydralite.io"
        keywords="open source, hydralite, project management"
      />
      <main className="w-screen h-screen flex items-center justify-between overflow-hidden">
        <div className="w-full self-stretch bg-secondary">
          <img src="~/public/login_background.svg" className="w-full" />
        </div>
        <section
          style={{ width: "40%" }}
          className="h-full bg-white flex flex-col items-center justify-between flex-shrink-0"
        >
          <Navbar />
          <LoginContent />
          <Terms />
        </section>
      </main>
    </>
  );
};

export default Login;
