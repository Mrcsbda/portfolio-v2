// TRANSLATION
import { Trans, useTranslation } from "react-i18next";
// CSS
import { AppText } from "../../../../app/components";
import "./HeroContent.css";

export const HeroContent = () => {
  const { t } = useTranslation("hero");
  return (
    <div className="hero-content">
      <div className="hero-content__badge">
        <div className="hero-content__badge-dot"></div>
        <AppText
          tag="p"
          type="body-m"
          children={t("BADGE")}
          color={"text-1"}
          fontWeight="medium"
        />
      </div>
      <AppText
        tag="h2"
        type="display"
        children={
          <Trans
            i18nKey="TITLE"
            ns="hero"
            components={{
              bold: <strong className="hero-content__title-bold" />,
            }}
          />
        }
        color={"text-1"}
        fontWeight="medium"
      />
    </div>
  );
};
