import React, { useState, useContext, useEffect } from "react";

/* Context for the application color theme */

const x: "dark" | "light" = "" as any;

const ThemeContext = React.createContext(null);
export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  type themeType = typeof x;
  let userThemePreference;

  useEffect(() => {
    userThemePreference = localStorage.getItem("hlTheme") as themeType;
  }, []);

  const [theme, setTheme] = useState<themeType>(userThemePreference || "dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
