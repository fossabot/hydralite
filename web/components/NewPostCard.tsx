import { Icon } from "@iconify/react";
import React from "react";

const NewPostCard = ({avatarUrl, name}) => {
  return (
    <div className="w-35rem rounded-10 p-3 bg-white-base mx-auto">
      <div className="p-2 border-b border-white-seperator">
        <h3 className="font-semibold flex items-center gap-1 text-sm">
          Lets make a <span className="font-bold">post</span>
          <Icon icon="ant-design:caret-down-outlined" className="h-2 w-2" />
        </h3>
      </div>
      <div className="p-2 mt-2 flex items-center gap-3">
        <img src={avatarUrl} alt="" className="h-7 w-7 rounded-full" />
        <h3 className="font-semibold text-gray text-md">What's up, <span className="font-bold">{name}</span>?</h3>
      </div>
    </div>
  );
};

export default NewPostCard;
