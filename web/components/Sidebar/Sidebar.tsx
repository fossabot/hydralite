import React from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";
import SidebarTab from "./SidebarTab";

const Sidebar = ({ projects }: { projects: {}[] }) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`
        h-full flex flex-col items-center w-20 p-2
        ${theme === "dark" && "bg-dark-bgMuted1"}
      `}
    >
      <SidebarTab
        isActive={false}
        activeIcon={<img src="/HydraliteLogoMonochrome.svg" className="select-none h-[2.7rem] w-[2.7rem]" draggable={false} />}
        icon={<img src="/HydraliteLogo.svg" className="select-none h-[2.7rem] w-[2.7rem]" draggable={false} />}
        name="Home"
        link="/"
      />
    </div>
  );
};

export default Sidebar;
