import React from "react";

import { Icon } from "@iconify/react";
import Label from "~/components/Label";

export const Labels: React.FC = () => (
  <div className="w-full p-5 overflow-y-auto">
    <div className="flex justify-between items-center w-full">
      <h1 className="font-extrabold text-lg">Labels</h1>
      <Icon icon="bi-plus-lg" className="text-text text-md" />
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
