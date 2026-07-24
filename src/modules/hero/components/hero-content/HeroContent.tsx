//CSS
import { useTranslation } from "react-i18next";
import { AppText } from "../../../../app/components";
import "./HeroContent.css";

export const HeroContent = () => {
  const { t } = useTranslation("hero");
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
    </div>
  );
};
