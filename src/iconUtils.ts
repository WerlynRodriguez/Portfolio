import { TSimpleIcon } from "./types";

const getUrl = (iconName: string) => `https://unpkg.com/simple-icons/icons/${iconName}.svg`;

/**
 * iconCache is a simple cache to store icons, so we don't have to load them every time
 */
const iconCache: Record<string, TSimpleIcon> = {};

/**
 * Get an icon from the cache or load it from the simple-icons package
 * @param iconName
 */
export const getIcon = async (iconName: string): Promise<TSimpleIcon> => {
    if (!iconName)
        return { title: "", path: "", hex: "" };
    // If the icon is already in the cache, return it
    if (iconCache[iconName] !== undefined)
        return iconCache[iconName];

    // The first letter of icon names is always to lowercase
    const iconNameCdn = iconName.charAt(0).toLowerCase() + iconName.slice(1);
    
    // Load the icon from the cdn
    const icon = await fetch(getUrl(iconNameCdn))
        .then(res => res.text())
        .then(text => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, "image/svg+xml");
            const svg = doc.querySelector("svg");
            const title = svg?.querySelector("title")?.textContent || iconName;
            const path = svg?.querySelector("path")?.getAttribute("d") || "";
            const hex = svg?.querySelector("path")?.getAttribute("fill") || "";
            return { title, path, hex };
        })
        .catch(() => { 
            return { title: iconName, path: "", hex: "" };
         });

    // Store the icon in the cache
    iconCache[iconName] = icon;

    return iconCache[iconName];
}
