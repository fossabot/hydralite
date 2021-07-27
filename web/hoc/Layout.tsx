import React from "react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";

const Layout = ({ children }) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`
        h-screen w-screen 
        ${theme === "dark" && "bg-dark-bg"}
      `}
    >
      {children}
    </div>
  );
};

export default Layout;
