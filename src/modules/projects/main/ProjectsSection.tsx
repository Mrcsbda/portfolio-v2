// COMPONENTS
import { AppText } from "@/app/components";
import { OtherProjects, ProjectsInfo } from "../components";
// TYPES
import { SECTIONS } from "@/app/types/data.types";
// TRANSLATION
import { useTranslation } from "react-i18next";
//CSS
import "./ProjectsSection.css";

export const ProjectsSection = () => {
  const { t } = useTranslation("projects");

  const projectsMeta = [
    {
      project: "Dicing S.A.S.",
      demo: "https://www.dicing.com.co/",
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1788298875/Captura_de_pantalla_2026-09-01_a_las_4.40.53_p._m._oazmoa.png",
      number: "01",
      technologies: ["Vue.js", "Pinia", "Firebase", "Cloudinary"],
    },
    {
      project: "Emosync",
      demo: "https://emosync-d2f42.web.app/",
      code: "https://github.com/Mrcsbda/Emosync",
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1788298971/Captura_de_pantalla_2026-09-01_a_las_4.42.34_p._m._hwgkku.png",
      number: "02",
      technologies: ["React", "Redux", "Firebase", "Cloudinary"],
    },
    {
      project: "Petshop",
      demo: "https://mrcsbda.github.io/Ecommerce/",
      code: "https://github.com/Mrcsbda/Ecommerce",
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1788298918/Captura_de_pantalla_2026-09-01_a_las_4.41.41_p._m._hfufho.png",
      number: "03",
      technologies: ["HTLM", "CSS", "JavaScript"],
    },
  ];

  const projects = projectsMeta.map((step, index) => ({
    ...step,
    subtitleKey: `PROJECTS_INFO.${index}.PROJECT_SUBTITLE`,
    descriptionKey: `PROJECTS_INFO.${index}.PROJECT_DESCRIPTION`,
  }));

  return (
    <div className="projects-section">
      <AppText
        id={SECTIONS.PROJECTS}
        tag="p"
        type={"section-tag"}
        children={t("PROJECTS")}
        className="projects-section__tag"
      />
      <AppText
        tag="p"
        type={"section-title"}
        children={t("PROJECTS_TITLE")}
        className="projects-section__title"
      />
      <div className="projects-section__projects-container">
        {projects.map((project, index) => (
          <ProjectsInfo key={index} data={project} />
        ))}
      </div>
      <OtherProjects />
    </div>
  );
};
