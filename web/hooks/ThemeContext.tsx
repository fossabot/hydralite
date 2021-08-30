import React, { useState, useContext, useEffect } from "react";

/* Context for the application color theme */
/* LEGACY - should use next-themes wherever possible */

export type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

const ThemeContext = React.createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const useThemeContext = (): ThemeContextType => useContext(ThemeContext);

export const ThemeContextProvider: React.FC = ({ children }) => {
  let userThemePreference: Theme;

  // Set theme based on stored value
  useEffect(() => {
    userThemePreference = localStorage.getItem("hlTheme") as Theme;
  }, []);

  // Fallback to prefers-color-scheme
  if (!userThemePreference) {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      userThemePreference = "dark";
    } else userThemePreference = "light";
  }

  const [theme, setTheme] = useState<Theme>(userThemePreference);

  function changeTheme(newTheme: Theme) {
    localStorage.setItem("hlTheme", newTheme);
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
