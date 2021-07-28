import Link from "next/link";
import React from "react";

interface SidebarProjectProps {
  id: string;
  name: string;
  logoUrl: string;
  isActive?: boolean;
}

const SidebarProject: React.FC<SidebarProjectProps> = ({
  id,
  name,
  logoUrl,
  isActive,
}) => {
  return (
    <Link
      href={`${
        process.env.CLIENT_URL || "http://localhost:3000"
      }/project/${id}`}
    >
      <img
        src={logoUrl}
        alt={name}
        className={`h-[3.4rem] w-[3.4rem] ${
          isActive ? "rounded-2xl" : "rounded-full"
        } hover:rounded-2xl transition-all object-cover cursor-pointer`}
        title={name}
        draggable={false}
      />
    </Link>
  );
};

export default SidebarProject;
