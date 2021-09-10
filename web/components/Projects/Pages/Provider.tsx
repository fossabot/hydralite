import React from "react";
import axios from "axios";
import { serverUrl } from "../../../utils/constants";

const GetGHToken = (name: string) => {
  axios.get(`${serverUrl}/api/auth/import/${name}`).then((resp) => {
    window.location = resp.data as any;
  });
};

const Provider = ({ setTab }) => (
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
export default Provider;
