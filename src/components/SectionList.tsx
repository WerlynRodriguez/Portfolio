interface ISectionSkillprops<T> {
    label: string;
    icon: React.ReactNode;
    data: T[];
    renderItem: (item: T, key: number) => React.ReactNode;
}

export default function <T>(props: ISectionSkillprops<T>) {
    const {
        label,
        icon,
        data,
        renderItem
    } = props;

    return (
    <>
        <h2 className="subtitle">
            {icon}
            {label}
        </h2>
        <div className="three-container list-flex-wrap">
            {data.map((skill, i) => renderItem(skill, i))}
        </div>
    </>
    )
}