import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeProvider";
import MenuDropDown from "./MenuDropDown";
import { Themes } from "../utils/theme";

export default function() {
   const { theme, setTheme } = useTheme();
   const { t } = useTranslation('header');

   /** Do the first character uppercase */
    const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

    const themeOptions = (Object.keys(Themes) as Array<keyof typeof Themes>).map(theme => ({
        label: capitalize(Themes[theme]),
        onClick: () => setTheme(theme)
    }));

    return (
        <header className="navbar bg-base-100 shadow-md sticky top-0 z-50">
            <div className="flex-1">
                <a className="btn btn-ghost text-2xl text-base-content font-bold" href='/'> Werlyn </a>
            </div>

            <div className="flex-none">
                <MenuDropDown
                    label={t("theme")}
                    align="end"
                    selected={theme}
                    options={themeOptions}
                />
            </div>
        </header>
    );
}