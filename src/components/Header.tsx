import { useTheme } from "../context/ThemeProvider";
import MenuDropDown from "./MenuDropDown";

export default function() {
   const { theme, setTheme, allThemes } = useTheme();

   const themeOptions = allThemes.map((theme, index) => ({
         label: theme,
         onClick: () => setTheme(theme)
    }));

    return (
        <header className="navbar bg-base-200 sticky top-0 z-50 shadow-md">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl" href='/'> Werlyn R. </a>
            </div>

            <div className="flex-none">
                <MenuDropDown
                    label="Theme"
                    align="end"
                    selected={theme}
                    options={themeOptions}
                />
            </div>
        </header>
    );
}