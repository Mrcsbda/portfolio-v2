// COMPONENTS
import { AppBtnContained, AppBtnOutlined, AppText } from "@/app/components";
// TYPES
import { SECTIONS } from "@/app/types/data.types";
// TRANSLATION
import { useTranslation } from "react-i18next";
//CSS
import {
  IconAt,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMailFast,
} from "@tabler/icons-react";
import "./ContactSection.css";

export const ContactSection = () => {
  const { t } = useTranslation("contact");

  const networks = [
    {
      icon: <IconBrandGithub stroke={2} size={20} />,
      text: "GitHub",
      link: "https://github.com/Mrcsbda",
    },
    {
      icon: <IconBrandLinkedin stroke={2} size={20} />,
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/mariana-casta%C3%B1eda-frontend/",
    },
    {
      icon: <IconAt stroke={2} size={20} />,
      text: t("EMAIL"),
      link: "mailto:macbedoya@gmail.com",
    },
  ];

  return (
    <div className="contact-section">
      <AppText
        id={SECTIONS.CONTACT}
        tag="p"
        type={"section-tag"}
        children={t("CONTACT")}
        className="contact-section__tag"
      />
      <AppText
        tag="p"
        type={"contact-title"}
        children={t("CONTACT_TITLE")}
        className="contact-section__title"
        textAlign="center"
      />
      <AppText
        tag="p"
        type={"description"}
        children={t("CONTACT_DESCRIPTION")}
        className="contact-section__description"
        textAlign="center"
      />
      <AppBtnContained
        onClick={() => {
          window.open("mailto:macbedoya@gmail.com", "_blank");
        }}
        text={t("WRITE_ME")}
        icon={<IconMailFast stroke={2} size={20} />}
      />
      <div className="contact-section__networks-container">
        {networks.map((network, index) => (
          <AppBtnOutlined
            key={index}
            onClick={() => window.open(network.link, "_blank")}
            text={network.text}
            icon={network.icon}
          />
        ))}
      </div>
    </div>
  );
};
