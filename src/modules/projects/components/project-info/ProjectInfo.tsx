// TRANSLATION
import { useTranslation } from "react-i18next";
//ICONS
import { IconArrowUpRight, IconCode } from "@tabler/icons-react";
//COMPONENTS
import { AppText } from "@app/components";
//CSS
import "./ProjectInfo.css";

interface IData {
  project: string;
  demo: string;
  code?: string;
  image: string;
  subtitleKey: string;
  descriptionKey: string;
  number: string;
  technologies: string[];
}

interface IProjectsInfoProps {
  data: IData;
}

export const ProjectsInfo = ({ data }: IProjectsInfoProps) => {
  const { t } = useTranslation("projects");

  return (
    <div className="project-info">
      <img
        src={data.image}
        alt={data.project}
        className="project-info__image"
      />
      <div className="project-info__content">
        <AppText
          tag="h3"
          type={"project-number"}
          children={t(data.number)}
          className="project-info__number"
        />
        <div className="project-info__technologies-container">
          {data.technologies.map((tech, index) => (
            <AppText
              key={index}
              tag="span"
              type={"project-chip"}
              children={tech}
              className="project-info__technology"
            />
          ))}
        </div>

        <AppText
          tag="h3"
          type={"project-title"}
          children={t(data.project)}
          className="project-info__title"
        />
        <AppText
          tag="h3"
          type={"rol-company"}
          children={t(data.subtitleKey)}
          className="project-info__subtitle"
        />
        <AppText
          tag="h3"
          type={"description"}
          children={t(data.descriptionKey)}
        />
        <div className="project-info__links">
          <a
            href={data.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-info__link-demo"
          >
            <IconArrowUpRight stroke={2} width={16} /> <span>Demo</span>
          </a>
          {data.code && (
            <a
              href={data.code}
              target="_blank"
              rel="noopener noreferrer"
              className="project-info__link-code"
            >
              <IconCode stroke={2} width={16} /> <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
