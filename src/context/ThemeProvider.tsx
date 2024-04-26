import { createContext, useContext, useState } from "react";
import { Themes } from "../utils/theme";

/** The key to store the theme in local storage, and html attribute */
const keyString = "data-theme";
/** The default theme to use */
const defTheme = Themes.light;

interface IThemeContext {
  /** The current theme */
  theme: string;
  /**
   * Set the theme to the entire application
   * @param theme The theme to set
   * @example
   * setTheme('dark')
   * setTheme('jfnge8w9843hjg') // Error
   */
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext({} as IThemeContext);

/**
 * A hook to use the theme context quickly
 * @returns The theme context
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

/**
 * A provider context for theme management
 */
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultTheme = localStorage.getItem(keyString) || defTheme;

  const [_theme, _setTheme] = useState(defaultTheme);
  document.documentElement.setAttribute(keyString, defaultTheme);

  const setTheme = (theme: string) => {
    const tryTheme = Themes[theme as keyof typeof Themes];

    if (!tryTheme) {
      throw new Error(`Invalid theme: ${theme}`);
    }

    if (tryTheme === _theme) return;

    localStorage.setItem(keyString, tryTheme);
    document.documentElement.setAttribute(keyString, tryTheme);
    _setTheme(tryTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: _theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
