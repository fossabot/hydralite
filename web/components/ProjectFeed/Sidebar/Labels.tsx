import { Icon } from "@iconify/react";
import React from "react";

export const Labels = () => {
  return (
    <div className="h-1/2 w-full p-6 overflow-y-auto">
      <div className="flex justify-between items-center w-full">
        <h1 className="font-extrabold text-xl">Labels</h1>
        <Icon icon="bi-plus-lg" className="text-text text-lg" />
      </div>
    </div>
  );
};
