import { getIcon } from "../iconUtils";
import { IBtnSkillProps } from "../types";
import SimpleIcon from "./SimpleIcon";

export default function (props: IBtnSkillProps) {
    const {
        iconName,
        badge,
        onClick
    } = props;

    const icon = getIcon(iconName);

    const _onClick = () => {
        if (badge)
            onClick && onClick();
    }

    return (
        <button className={`btn btn-sm shadow-md ${!badge && 'no-animation cursor-default'}`} onClick={_onClick}>
            {icon.path && <SimpleIcon hex={icon.hex} path={icon.path} className="w-4 h-4"/>}
            {icon.title}
            {badge && <div className="badge">+{badge}</div>}
        </button>
    )
}