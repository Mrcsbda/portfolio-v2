// REACT
import { useEffect, useState } from "react";
//HOOKS
import { useActiveSection } from "../../hooks";
//TRANSLATION
import { useTranslation } from "react-i18next";
//STORE
import { useAppStore } from "../../store";
// TYPES
import { ENUM_LANGUAGE, ENUM_THEME, SECTIONS } from "../../types/data.types";
// COMPONENTS
import { AppBtnContained } from "../AppBtnContained/AppBtnContained";
import { AppText } from "../AppText/AppText";
// CSS
import i18next from "i18next";
import { AppBtnOutlined } from "../AppBtnOutlined/AppBtnOutlined";
import "./AppHeader.css";

export const AppHeader = () => {
  const { theme, lang, changeTheme, changeLanguage } = useAppStore();
  const { t } = useTranslation("header");
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(true);
  const activeSection = useActiveSection(Object.values(SECTIONS));

  useEffect(() => {
    const langAux = localStorage.getItem("lang");
    if (langAux) i18next.changeLanguage(langAux);
  }, []);

  const menuOptions = [
    {
      label: t("NAVBAR.ABOUT"),
      id: SECTIONS.ABOUT,
    },
    {
      label: t("NAVBAR.PROJECTS"),
      id: SECTIONS.PROJECTS,
    },
    {
      label: t("NAVBAR.CONTACT"),
      id: SECTIONS.CONTACT,
    },
  ];

  const onDownloadCV = () => {
    const link = document.createElement("a");
    const cvFile = `CV_Mariana_Castañeda_${lang.get()}.pdf`;
    link.href = `/cv/${cvFile}`;
    link.download = cvFile;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="nav">
      <section className="nav__container" id="header">
        <div className="nav__inner">
          <div className="nav__logo-container">
            <img
              className="nav__logo"
              src="/favicon.svg"
              alt="Logo"
              width={40}
              height={40}
            />
            <AppText
              tag="h2"
              type="fixed"
              content={"MariDev"}
              font="sora"
              fontSize="1.125rem"
              color="text-1"
            />
          </div>

          <div className="nav__nav-list-container"></div>

          <div className="nav__actions-container">
            <div className="nav__language-container"></div>

            <button
              className="nav__theme-container"
              id="themeToggle"
              onClick={() =>
                changeTheme(
                  theme.get() === ENUM_THEME.LIGHT
                    ? ENUM_THEME.DARK
                    : ENUM_THEME.LIGHT,
                )
              }
            >
              <span id="themeIcon">
                {theme.use() === ENUM_THEME.LIGHT ? "🌙" : "☀️"}
              </span>
            </button>

            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              id="themeToggle"
              className={`nav__menu-mobile-btn ${showMobileMenu ? "nav__menu-mobile-btn--active" : ""}`}
            >
              <span className="nav__menu-mobile-btn--line"></span>
              <span className="nav__menu-mobile-btn--line"></span>
              <span className="nav__menu-mobile-btn--line"></span>
            </button>

            <div className="nav__cv-btn-container"></div>
          </div>
        </div>
      </section>

      <section
        className={`nav__menu-mobile-container ${showMobileMenu ? "nav__menu-mobile-container--active" : ""}`}
      >
        <ul className="nav__menu-mobile-list">
          {menuOptions.map((option, index) => (
            <li
              key={index + 1}
              className={`nav__menu-mobile-item ${activeSection === option.id ? "nav__menu-mobile-item--active" : ""}`}
            >
              <AppText
                tag="h3"
                type="fixed"
                content={option.label}
                color={activeSection === option.id ? "accent" : "text-1"}
                fontWeight="regular"
                fontSize="18px"
              />
              <span
                className={`material-symbols-rounded nav__menu-mobile-icon ${activeSection === option.id ? "nav__menu-mobile-icon--active" : ""}`}
              >
                chevron_right
              </span>
            </li>
          ))}
        </ul>

        <hr className="nav__menu-mobile-divider"></hr>

        <div className="nav__menu-mobile-btns-container">
          <AppBtnContained
            onClick={() => {
              changeLanguage(
                lang.get() === ENUM_LANGUAGE.EN
                  ? ENUM_LANGUAGE.ES
                  : ENUM_LANGUAGE.EN,
              );
            }}
          >
            <div className="nav__language-btn-content">
              <span className="material-symbols-rounded">language</span>
              <AppText
                tag="p"
                type="fixed"
                content={lang.get() === ENUM_LANGUAGE.EN ? "ES" : "EN"}
                color="pu-50"
                fontWeight="regular"
                fontSize="16px"
              />
            </div>
          </AppBtnContained>

          <AppBtnOutlined onClick={onDownloadCV}>
            <div className="nav__language-btn-content">
              <span className="material-symbols-rounded">
                arrow_downward_alt
              </span>
              <AppText
                tag="p"
                type="fixed"
                content={t("DOWNLOAD_CV")}
                color="text-1"
                fontWeight="regular"
                fontSize="16px"
              />
            </div>
          </AppBtnOutlined>
        </div>
      </section>
    </nav>
  );
};
