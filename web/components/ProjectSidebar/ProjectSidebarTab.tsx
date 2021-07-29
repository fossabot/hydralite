import React from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";

interface ProjectSidebarTabProps {
  name: string;
  isActive?: boolean;
  Icon: any;
  ActiveIcon?: any;
}

export const ProjectSidebarTab: React.FC<ProjectSidebarTabProps> = ({
  isActive = false,
  name,
  Icon,
  ActiveIcon,
}) => {
  const { theme } = useThemeContext();
  return (
    <div className="flex items-center gap-3 select-none cursor-pointer">
      {isActive ? (
        <ActiveIcon
          className={`h-[1.2rem] w-[1.2rem] ${
            theme === "dark" && "text-dark-color-accent fill-current"
          }`}
        />
      ) : (
        <Icon
          className={`h-[1.2rem] w-[1.2rem] ${
            theme === "dark" && "text-dark-fg fill-current"
          }`}
        />
      )}
      <span
        className={`
        text-sm mt-[1px] 
        ${isActive ? "font-extrabold" : "font-normal"}
        ${
          theme === "dark" && isActive
            ? "text-dark-color-accent"
            : "text-dark-fg"
        }`}
      >
        {name}
      </span>
    </div>
  );
};
