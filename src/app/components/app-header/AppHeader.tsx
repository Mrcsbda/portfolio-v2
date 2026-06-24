// REACT
import { useEffect, useState } from "react";
//HOOKS
import { useActiveSection, useValidateScreen } from "../../hooks";
//TRANSLATION
import i18next from "i18next";
import { useTranslation } from "react-i18next";
//STORE
import { useAppStore } from "../../store";
// TYPES
import { ENUM_LANGUAGE, ENUM_THEME, SECTIONS } from "../../types/data.types";
// COMPONENTS
import { AppBtnContained } from "../app-btn-contained/AppBtnContained";
import { AppBtnOutlined } from "../app-btn-outlined/AppBtnOutlined";
import { AppText } from "../app-text/AppText";
// CSS
import "./AppHeader.css";

export const AppHeader = () => {
  const { theme, lang, changeTheme, changeLanguage } = useAppStore();
  const { t } = useTranslation("header");
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const activeSection = useActiveSection(Object.values(SECTIONS));
  const { isMobile, isTablet } = useValidateScreen();

  useEffect(() => {
    const langAux = localStorage.getItem("lang");
    if (langAux) i18next.changeLanguage(langAux);
  }, []);

  useEffect(() => {
    if ((!isMobile || !isTablet) && showMobileMenu) setShowMobileMenu(false);
  }, [isMobile, isTablet]);

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

  const onScrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
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
              children={"MariDev"}
              font="sora"
              fontSize="1.125rem"
              color="text-1"
            />
          </div>

          {!isMobile && !isTablet && (
            <ul className="nav__nav-list-container">
              {menuOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => onScrollToSection(option.id)}
                  className={`nav__nav-item ${activeSection === option.id ? "nav__nav-item--active" : ""}`}
                >
                  <AppText
                    tag="h3"
                    type="body-xl"
                    children={option.label}
                    color={activeSection === option.id ? "accent" : "text-1"}
                    fontWeight="regular"
                  />
                </li>
              ))}
            </ul>
          )}

          <div className="nav__actions-container">
            {!isMobile && !isTablet && (
              <button
                className="nav__language-container"
                id="themeToggle"
                onClick={() =>
                  changeLanguage(
                    lang.get() === ENUM_LANGUAGE.EN
                      ? ENUM_LANGUAGE.ES
                      : ENUM_LANGUAGE.EN,
                  )
                }
              >
                <div className="nav__language-btn-desktop-content">
                  <span className="material-symbols-rounded">language</span>
                  <AppText
                    tag="p"
                    type="fixed"
                    children={lang.get() === ENUM_LANGUAGE.EN ? "ES" : "EN"}
                    color="text-1"
                    fontWeight="regular"
                    fontSize="16px"
                  />
                </div>
              </button>
            )}

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

            {(isMobile || isTablet) && (
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                id="themeToggle"
                className={`nav__menu-mobile-btn ${showMobileMenu ? "nav__menu-mobile-btn--active" : ""}`}
              >
                <span className="nav__menu-mobile-btn--line"></span>
                <span className="nav__menu-mobile-btn--line"></span>
                <span className="nav__menu-mobile-btn--line"></span>
              </button>
            )}

            {!isMobile && !isTablet && (
              <AppBtnContained onClick={onDownloadCV}>
                <div className="nav__cv-btn-content">
                  <span className="material-symbols-rounded">
                    arrow_downward_alt
                  </span>
                  <AppText
                    tag="p"
                    type="fixed"
                    children={t("DOWNLOAD_CV")}
                    color="pu-50"
                    fontWeight="regular"
                    fontSize="16px"
                  />
                </div>
              </AppBtnContained>
            )}
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
              onClick={() => {
                onScrollToSection(option.id);
                setShowMobileMenu(false);
              }}
            >
              <AppText
                tag="h3"
                type="fixed"
                children={option.label}
                color={activeSection === option.id ? "accent" : "text-1"}
                fontWeight="regular"
                fontSize="16px"
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
                children={lang.get() === ENUM_LANGUAGE.EN ? "ES" : "EN"}
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
                children={t("DOWNLOAD_CV")}
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
