import React from "react";
import { Categories } from "./Categories";
import { Labels } from "./Labels";
import { Members } from "./Members";

export const Sidebar = () => {
  return (
    <div className="w-96 h-full border-l border-white-seperator">
      <Labels />
      <span className="border-b border-white-seperator"></span>
      <Members />
    </div>
  );
};
