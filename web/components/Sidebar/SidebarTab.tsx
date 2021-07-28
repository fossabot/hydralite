import Link from "next/link";
import React from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";

interface SidebarTabProps {
  isActive?: boolean;
  activeIcon?: any;
  icon: any;
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
    <Link href={link}>
      <a
        className={`
            h-[3.4rem] w-[3.4rem] rounded-xl grid place-items-center
            ${
              theme === "dark" &&
              `${isActive ? "bg-dark-color-accent" : "bg-dark-bgMuted2"}`
            }
        `}
        title={name}
      >
        {isActive ? activeIcon : icon}
      </a>
    </Link>
  );
};

export default SidebarTab;
