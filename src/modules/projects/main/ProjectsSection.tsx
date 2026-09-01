// COMPONENTS
import { AppText } from "@/app/components";
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
      project: "DICING S.A.S.",
      demo: "https://www.dicing.com.co/",
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1787613992/projects/Captura_de_pantalla_2026-08-24_a_las_6.21.44_p._m._v6tpgo.png",
    },
    {
      project: "EMOSYNC",
      demo: "https://emosync-d2f42.web.app/",
      code: "https://github.com/Mrcsbda/Emosync",
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1788295793/Captura_de_pantalla_2026-09-01_a_las_3.48.39_p._m._fiokhw.png",
    },
    {
      project: "PETSHOP",
      demo: "https://mrcsbda.github.io/Ecommerce/",
      code: "https://github.com/Mrcsbda/Ecommerce",
      image:
        "https://res.cloudinary.com/dd3qzm4in/image/upload/v1787614034/projects/Captura_de_pantalla_2026-08-24_a_las_6.27.05_p._m._iqdsyj.png",
    },
  ];

  const steps = projectsMeta.map((step, index) => ({
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
    </div>
  );
};
