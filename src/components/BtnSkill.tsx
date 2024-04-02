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

    return (
        <button 
            className={`btn btn-sm shadow-md ${!badge && 'no-animation'} ${className}`} 
            onClick={onClick && onClick}
        >
            <SimpleIcon className="w-4 h-4 contrast-250" name={iconName} showTitle/>
            {badge && <div className="badge">{badge}</div>}
        </button>
    )
}