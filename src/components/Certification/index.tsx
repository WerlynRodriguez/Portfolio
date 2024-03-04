import {
    CalendarDaysIcon,
    CheckBadgeIcon
} from "@heroicons/react/24/solid";
import SimpleIcon from "../SimpleIcon";
import { getIcon } from "../../iconUtils";

import './styles.css';
import { useEffect, useState } from "react";

interface ICertificationProps {
    title: string;
    from: string;
    date: string;
    icon: string;
    link: string;
}

/**
 * A card component to display a certification
 */
export default function (props: ICertificationProps) {
    const {
        title,
        from,
        date,
        icon,
        link
    } = props;

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, [title]);

    return (
        <a
            className="certification-card"
            href={link} 
            target="_blank" 
            rel="noreferrer"
        >
            <SimpleIcon className="card-icon" path={getIcon(icon).path} />

            <CheckBadgeIcon className="card-badge" />

            <div className="card-body">
                <h1 className="card-title">{title}</h1>
                <p className="card-from">{from}</p>
                <span className="card-date"><CalendarDaysIcon className="w-5 mr-2 fill-black/35"/> {date}</span>
            </div>
        </a>
    )
}