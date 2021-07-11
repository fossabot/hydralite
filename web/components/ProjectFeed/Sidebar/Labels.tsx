import { Icon } from "@iconify/react";
import React from "react";
import Label from "~/components/Label";

export const Labels = () => {
  return (
    <div className="h-1/2 w-full p-6 overflow-y-auto">
      <div className="flex justify-between items-center w-full">
        <h1 className="font-extrabold text-xl">Labels</h1>
        <Icon icon="bi-plus-lg" className="text-text text-lg" />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <Label borderColor="#FED7A9" text="Story" />
        <Label borderColor="#A9B7FE" text="Inspiration" />
        <Label borderColor="#A9D5FE" text="Release" />
        <Label borderColor="#FED7A9" text="Story" />
        <Label borderColor="#A9B7FE" text="Inspiration" />
        <Label borderColor="#A9D5FE" text="Release" />
      </div>
    </div>
  );
};
