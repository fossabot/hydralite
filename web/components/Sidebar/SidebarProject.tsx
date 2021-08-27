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
        />
      )}
      <Link
        href={`${
          process.env.CLIENT_URL || "https://alpha.hydralite.io"
        }/project/${id}`}
      >
        <a className="h-[3rem] w-[3rem] cursor-pointer" title={name}>
          <div
            className={`select-none h-full w-full hover:rounded-2xl hover:opacity-[0.8] transition-all object-cover flex align-middle justify-center ${
              isActive ? "rounded-2xl" : "rounded-full"
            }`}
          >
            <p className="text-2xl">{name[0]}</p>
          </div>
        </a>
      </Link>
    </>
  );
};

export default SidebarProject;
