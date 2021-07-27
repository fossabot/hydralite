import React, { useState, useContext, useEffect } from "react";
import { fetchThemeColors } from "util/fetchThemeColors";
import { themeColorsType, themeNameType } from "~/types/Theme.type";

/* Context for the application color theme */

interface ThemeContextType {
  theme: themeColorsType;
  changeTheme: (themeName: themeNameType) => void;
}
const ThemeContext = React.createContext<ThemeContextType>({} as ThemeContextType);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  let userThemePreference
  useEffect(() => {
    userThemePreference = localStorage.getItem("hlTheme") as themeNameType;
  }, []);

  const [themeName, setThemeName] = useState<themeNameType>(userThemePreference ?? "dark");
  
  function changeTheme(themeName: themeNameType) {
    localStorage.setItem("hlTheme", themeName);
    setThemeName(themeName);
  }

  const theme = fetchThemeColors(themeName)

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
