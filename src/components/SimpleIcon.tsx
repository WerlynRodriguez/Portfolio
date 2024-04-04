import { useEffect, useState } from "react";
import type { TSimpleIcon } from "../types";
import { getIcon } from "../iconUtils";
import Loader from "./Loader";

interface IIconProps {
    name: string;
    showTitle?: boolean;
    className?: string;
}

export default function (props: IIconProps) {
    const { 
        name,
        showTitle = false,
        className = '' 
    } = props;

    const [icon, setIcon] = useState<TSimpleIcon | null>(null);

    useEffect(() => {
        (async () => {
            const icon = await getIcon(name);
            setIcon(icon);
        })();
    }, [name]);

    return (
    <>

        {
            icon ?
            icon.path &&
                <svg className={className} fill={icon?.hex ? `#${icon?.hex}` : 'currentColor'} viewBox="0 0 24 24">
                    <path d={icon?.path}/>
                </svg>
            :
            <Loader />
        }
        {showTitle && icon?.title}
    </>
    )
}