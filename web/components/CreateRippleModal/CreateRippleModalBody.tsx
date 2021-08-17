import React from "react";

export const CreateRippleModalBody = () => {
  return (
    <div className="w-full flex items-start gap-4">
      <img
        src="https://avatars.githubusercontent.com/u/67153585?v=4"
        alt=""
        className="h-12 w-12 rounded-full"
      />
      <div className="w-full h-40 pt-3 outline-none" contentEditable>
        <h3 className="font-bold opacity-75">
          What's up, <span className="font-extrabold">fullstackslayer</span>?
        </h3>
      </div>
    </div>
  );
};
