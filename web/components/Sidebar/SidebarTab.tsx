import Link from "next/link";
import React from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";

interface SidebarTabProps {
  isActive?: boolean;
  activeIcon?: unknown;
  icon: unknown;
  name: string;
  link: string;
}

const SidebarTab: React.FC<SidebarTabProps> = ({
  isActive,
  activeIcon,
  icon,
  name,
  link,
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
      <Link href={link}>
        <a
          className={`
            h-[3rem] w-[3rem] grid place-items-center rounded-2xl transition-all hover:opacity-[0.8]
            ${
              theme === "dark" &&
              `
                ${isActive ? "bg-dark-color-accent" : "bg-dark-bgMuted4"}
              `
            }
        `}
          title={name}
        >
          {isActive ? activeIcon : icon}
        </a>
      </Link>
    </>
  );
};

export default SidebarTab;
