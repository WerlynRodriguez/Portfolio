interface IIconProps {
    hex: string;
    path: string;
    className?: string;
}

export default function (props: IIconProps) {
    const { hex, path, className } = props;

    return (
        <svg className={className} fill={`#${hex}`} viewBox="0 0 24 24">
            <path d={path}/>
        </svg>
    )
}