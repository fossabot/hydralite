import React from "react";

interface UserProps {
  hasAvatar?: boolean;
  avatar: string;
  name: string;
  status?: string;
  showCrown?: boolean;
}

const User: React.FC<UserProps> = ({
  // hasAvatar = true,
  avatar,
  name,
  status,
  // showCrown,
}) => (
  <div className="flex items-center my-1.5">
    <img alt="" className="w-7.5 h-7.5 rounded-full bg-gray" src={avatar} />
    <div className="flex flex-col ml-3 mb-1px">
      <span className="text-sm font-bold">{name}</span>{" "}
      {status && <span className="text-xs">{status}</span>}
    </div>
  </div>
);

export default User;
