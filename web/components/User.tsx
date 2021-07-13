import React from "react";
import { Icon } from "@iconify/react";

interface UserProps {
    avatar: string;
    name: string;
    status?: string;
    showCrown?: boolean;
}
const User: React.FC<UserProps> = ({ avatar, name, status, showCrown }) => {
  return (
    <div className="flex my-1">
      <img className="w-10 h-10 rounded-full bg-gray" src={avatar}></img>
      <div className="flex flex-col ml-3 leading-tight">
        <span className="text-sm font-bold">{name}</span> {status && <span className="text-xs">{status}</span>}
      </div>
    </div>
  );
};

export default User;
