// ICONS
import {
  IconArrowNarrowDownDashed,
  IconAt,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
// TRANSLATION
import { useTranslation } from "react-i18next";
//COMPONENTS
import {
  AppBtnContained,
  AppBtnOutlined,
  AppText,
} from "../../../../app/components";
// STORE
import { appStore } from "../../../../app/store";
// TYPES
import { SECTIONS } from "../../../../app/types/data.types";
//CSS
import "./HeroContent.css";

export const HeroContent = () => {
  const { t } = useTranslation("hero");
  const { scrollToSection } = appStore();

  const networks = [
    {
      icon: <IconBrandGithub stroke={2} size={20} />,
      link: "https://github.com/Mrcsbda",
    },
    {
      icon: <IconBrandLinkedin stroke={2} size={20} />,
      link: "https://www.linkedin.com/in/mariana-casta%C3%B1eda-frontend/",
    },
    {
      icon: <IconAt stroke={2} size={20} />,
      link: "mailto:macbedoya@gmail.com",
    },
  ];

  return (
    <div className="hero-content">
      <div className="hero-content__chip">
        <div className="hero-content__chip-pill"></div>
        <AppText tag="span" type={"rol-timeline"} children={t("BADGE")} />
      </div>
      <div>
        <AppText tag="h2" type={"hero-title"} children={t("TITLE")} />
        <AppText tag="h2" type={"hero-title-soft"} children={t("SUBTITLE")} />
      </div>
      <AppText tag="p" type={"description"} children={t("DESCRIPTION")} />
      <div className="hero-content__buttons-container">
        <AppBtnContained
          onClick={() => scrollToSection(SECTIONS.PROJECTS)}
          text={t("VIEW_PROJECTS")}
          icon={<IconArrowNarrowDownDashed stroke={2} size={16} />}
        />
        <AppBtnOutlined
          onClick={() => scrollToSection(SECTIONS.CONTACT)}
          text={t("CONTACT_ME")}
        />
      </div>
      <div className="hero-content__networks-container">
        {networks.map((network, index) => (
          <AppBtnOutlined
            key={index}
            onClick={() => window.open(network.link, "_blank")}
            icon={network.icon}
          />
        ))}
      </div>
    </div>
  );
};
