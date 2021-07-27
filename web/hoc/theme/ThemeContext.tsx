import React, { useState, useContext, useEffect } from "react";
import { themeType } from "~/types/Theme.type";

/* Context for the application color theme */

interface ThemeContextType {
  theme: themeType;
  changeTheme: (theme: themeType) => void;
}
const ThemeContext = React.createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  let userThemePreference;
  useEffect(() => {
    userThemePreference = localStorage.getItem("hlTheme") as themeType;
  }, []);

  const [theme, setTheme] = useState<themeType>(
    userThemePreference ?? "dark"
  );

  function changeTheme(theme: themeType) {
    localStorage.setItem("hlTheme", theme);
    setTheme(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
