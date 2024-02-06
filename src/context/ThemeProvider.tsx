import { createContext, useState } from "react"

const keyString = 'data-theme'

type TThemeContext = {
    theme: string
    setTheme: (theme: string) => void
}

export const ThemeContext = createContext({} as TThemeContext)

export const useTheme = () => {
    if (!ThemeContext) throw new Error('useTheme must be used within a ThemeProvider');

    return ThemeContext
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const defaultTheme = localStorage.getItem(keyString) || 'nord'
    const [theme, _setTheme] = useState(defaultTheme)
    document.documentElement.setAttribute(keyString, defaultTheme);

    const setTheme = (theme: string) => {
        localStorage.setItem(keyString, theme);
        document.documentElement.setAttribute(keyString, theme);
        _setTheme(theme);
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}