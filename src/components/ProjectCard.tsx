import BtnSkill from "./BtnSkill";

interface IProjectCardProps {
    img: string;
    title: string;
    desc: string;
    techs: string[];
}

export default function (props: IProjectCardProps) {
    const {
        img,
        title,
        desc,
        techs
    } = props;

    return (
        <div className="card card-compact shadow-xl bg-base-200">
            <figure>
                <img src={img} alt="project" className="aspect-video object-cover object-center"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>

                <div className="card-actions justify-center">
                    {techs.map((tech, i) => (
                        <BtnSkill key={i} iconName={tech} className="bg-base-300 cursor-default" />
                    ))}
                </div>
            </div>
        </div>
    )
}