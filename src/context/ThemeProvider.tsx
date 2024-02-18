import { createContext, useContext, useState } from "react"

const keyString = 'data-theme'
const defTheme = 'light'
const allThemes = ['light', 'dark']

interface IThemeContext {
    allThemes: string[]
    theme: string

    /**
     * Set the theme to the entire application
     * @param theme The theme to set
     * @example
     * setTheme('dark')
     * setTheme('jfnge8w9843hjg') // Error
     */
    setTheme: (theme: string) => void
}

export const ThemeContext = createContext({} as IThemeContext)

/**
 * A hook to use the theme context quickly
 * @returns The theme context
 */
export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');

    return context
}

/**
 * A provider context for theme management
 */
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const defaultTheme = localStorage.getItem(keyString) || defTheme
    
    const [_theme, _setTheme] = useState(defaultTheme)
    document.documentElement.setAttribute(keyString, defaultTheme);

    const setTheme = (theme: string) => {
        if (theme === _theme) return;
        if (!allThemes.includes(theme)) throw new Error('Invalid theme');

        localStorage.setItem(keyString, theme);
        document.documentElement.setAttribute(keyString, theme);
        _setTheme(theme);
    }

    return (
        <ThemeContext.Provider value={{
            allThemes,
            theme: _theme,
            setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}