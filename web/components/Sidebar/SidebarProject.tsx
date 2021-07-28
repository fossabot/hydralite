import Link from "next/link";
import React from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";

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
  const { theme } = useThemeContext();

  return (
    <>
      {isActive && (
        <span
          className={`absolute left-0 w-1 h-12 rounded-full ${
            theme === "dark" && "bg-[#fff]"
          }`}
        >
        </span>
      )}
      <Link
        href={`${
          process.env.CLIENT_URL || "http://localhost:3000"
        }/project/${id}`}
      >
        <a className={`h-[3rem] w-[3rem] cursor-pointer`} title={name}>
          <img
            src={logoUrl}
            alt={name}
            draggable={false}
            className={`${
              isActive ? "w-full h-full rounded-2xl" : "rounded-full"
            } hover:rounded-2xl transition-all object-cover`}
          />
        </a>
      </Link>
    </>
  );
};

export default SidebarProject;
