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
      <a className={`h-[3.3rem] w-full`} title={name}>
        <img
          src={logoUrl}
          alt={name}
          className={`w-full h-full ${
            isActive ? "rounded-xl" : "rounded-full"
          } hover:rounded-xl transition-all`}
        />
      </a>
    </Link>
  );
};

export default SidebarProject;
