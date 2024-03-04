import { getIcon } from "../iconUtils";
import SimpleIcon from "./SimpleIcon";

interface IBtnSkillProps {
    iconName: string;
    className?: string;
    badge?: number | undefined;
    onClick?: () => void;
}

export default function (props: IBtnSkillProps) {
    const {
        iconName,
        className,
        badge,
        onClick
    } = props;

    const icon = getIcon(iconName);

    return (
        <button 
            className={`btn btn-sm shadow-md ${!badge && 'no-animation'} ${className}`} 
            onClick={onClick && onClick}
        >
            {icon.path && <SimpleIcon hex={icon.hex} path={icon.path} className="w-4 h-4 contrast-250"/>}
            {icon.title}
            {badge && <div className="badge">{badge}</div>}
        </button>
    )
}