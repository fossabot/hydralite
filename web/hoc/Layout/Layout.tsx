import React from "react";
import Navbar from "~/components/Navbar/Navbar";
import ProjectSidebar from "~/components/ProjectSidebar/ProjectSidebar";
import Sidebar from "~/components/Sidebar/Sidebar";
import { useThemeContext } from "../theme/ThemeContext";

interface LayoutProps {
  children: any;
  activeTab?: "Home" | "Activity" | "My Projects" | "Discover" | "Communicate";
  includeProjectSidebar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  activeTab,
  includeProjectSidebar,
}) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`h-screen w-screen flex ${theme === "dark" && "bg-dark-bg"}`}
    >
      <Sidebar activeTab={activeTab} />
      {includeProjectSidebar && <ProjectSidebar />}
      <div className="h-screen w-[calc(100vw-4.8rem)] flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
