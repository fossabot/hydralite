import React, { useState } from "react";
import Skeleton from "../../hoc/Skeleton/Skeleton";

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

const Provider = () => {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center p-24 ">
      <div className="bg-[#282E3B] w-full h-[100%] drop-shadow-md rounded-md"></div>
    </div>
  );
};

export default function CreateProject() {
  const [tab, setTab] = useState("provider");
  return (
    <Skeleton sidebar={false}>
      <div className="h-[calc(100vh-3.5rem)] p-7 w-[100vw] flex items-center justify-center flex-col">
        <h1 className="text-3xl font-montserrat font-medium">
          Create a new{" "}
          <span className="text-dark-color-accent font-extrabold">project</span>
        </h1>
        <div className="w-[80vw] h-[80vh]">
          <Tabs tab={tab} setTab={setTab}></Tabs>
          <div className="mt-11">
            {tab === "provider" ? <Provider></Provider> : <span></span>}
            {tab === "repo" ? <div>Repo</div> : <span></span>}
            {tab === "details" ? <div>Repo</div> : <span></span>}
          </div>
        </div>
        <div className="h-96"></div>
      </div>
    </Skeleton>
  );
}
