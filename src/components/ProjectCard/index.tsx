import BtnSkill from "../BtnSkill";
import { ProjectBannerPath } from "../../utils/data.util";
import type { TProject } from "../../types";

import './styles.css';

interface IProjectCardProps {
  project: TProject;
  onClick?: () => void;
}

export default function (props: IProjectCardProps) {
  const { project, onClick = () => {} } = props;
  const { id, title, desc, techs, links } = project;

  return (
    <div
      className="project_card card card-compact shadow-xl bg-base-200 border-[2px] border-base-200 hover:border-base-300"
      onClick={onClick}
    >
      <figure>
        <img
          src={ProjectBannerPath(id, true)}
          alt="project"
          className="aspect-video object-cover object-center"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>

        <div className="card-actions justify-center">
          <div className="project_card-links">
            {links.map((link, i) => (
              <a
                key={`ProjectCardLink ${i}`}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                <BtnSkill className="bg-base-300" iconName={link.icon} text={link.name} />
              </a>
            ))}
          </div>

          <div className="project_card-skills">
            {techs.map((tech, i) => (
              <BtnSkill
                key={`BtnSkill ${i}`}
                iconName={tech}
                className="bg-base-300 cursor-default"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
