// TRANSLATION
import { useTranslation } from "react-i18next";
//COMPONENTS
import { AppText } from "@app/components";
//CSS
import {
  IconAiGateway,
  IconArrowUpRight,
  IconListDetails,
  IconMapPins,
} from "@tabler/icons-react";
import "./OtherProjects.css";

export const OtherProjects = () => {
  const { t } = useTranslation("projects");

  const projects = [
    {
      title: "NOC",
      technologies: ["Node Js", "MongoDB", "PostgreSQL"],
      link: "https://github.com/Mrcsbda/network-operation-center-app",
      icon: IconAiGateway,
    },
    {
      title: "Multi step form",
      technologies: ["React"],
      link: "https://github.com/Mrcsbda/Multi-step-form",
      icon: IconListDetails,
    },
    {
      title: "RedEAmerica",
      technologies: ["React", "Firebase"],
      link: "https://github.com/Mrcsbda/RedEAmerica-hackaton",
      icon: IconMapPins,
    },
  ];

  return (
    <div className="other-projects">
      <AppText
        tag="h3"
        type={"rol-company"}
        children={t("OTHER_PROJECTS")}
        className="other-projects__title"
      />
      <div className="other-projects__projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="other-projects__project"
            onClick={() => window.open(project.link, "_blank")}
          >
            <div className="other-projects__project-icon">
              <project.icon stroke={2} size={28} />
            </div>
            <div className="other-projects__project-info">
              <AppText
                tag="h3"
                type={"other-project-title"}
                children={project.title}
                className="other-projects__project-title"
              />
              <div className="other-projects__project-technologies">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="other-projects__project-technology"
                  >
                    <AppText
                      key={index}
                      tag="span"
                      type={"project-chip"}
                      children={tech}
                    />
                    {index !== project.technologies.length - 1 && (
                      <span className="other-projects__project-technology-sep">
                        ·
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <IconArrowUpRight stroke={2} width={16} />
          </div>
        ))}
      </div>
    </div>
  );
};
