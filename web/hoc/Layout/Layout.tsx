import React from "react";
import Sidebar from "~/components/Sidebar/Sidebar";
import { useThemeContext } from "../theme/ThemeContext";

const Layout = ({ children }) => {
  const { theme } = useThemeContext();

  return (
    <div className={`h-screen w-screen flex ${theme === "dark" && "bg-dark-bg"}`}>
      <Sidebar projects={[]} />
      {children}
    </div>
  );
};

export default Layout;
