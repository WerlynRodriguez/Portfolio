import { useTheme } from "../context/ThemeProvider";
import MenuDropDown from "./MenuDropDown";

export default function() {
   const { theme, setTheme, allThemes } = useTheme();

   const themeOptions = allThemes.map((theme, index) => ({
         label: theme,
         onClick: () => setTheme(theme)
    }));

    return (
        <header className="navbar bg-base-100 sticky top-0 z-50">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl" href='/'> Werlyn R. </a>
            </div>

            <div className="flex-none">
                <MenuDropDown
                    label="Theme"
                    align="end"
                    options={themeOptions}
                />
            </div>
        </header>
    );
}