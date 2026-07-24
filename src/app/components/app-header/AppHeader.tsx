// REACT
import { useEffect, useState } from "react";
//HOOKS
import { useActiveSection, useValidateScreen } from "../../hooks";
//TRANSLATION
import i18next from "i18next";
import { useTranslation } from "react-i18next";
//STORE
import { appStore } from "../../store";
// TYPES
import { ENUM_LANGUAGE, ENUM_THEME, SECTIONS } from "../../types/data.types";
// COMPONENTS
import { AppText } from "../app-text/AppText";
// CSS
import "./AppHeader.css";
// ICONS
import { IconMenu3, IconMoon, IconSunLow } from "@tabler/icons-react";

export const AppHeader = () => {
  const { theme, lang, scrollToSection, changeTheme, changeLanguage } =
    appStore();
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
      label: t("NAVBAR.ROUTE"),
      id: SECTIONS.ROUTE,
    },
    {
      label: t("NAVBAR.STACK"),
      id: SECTIONS.STACK,
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

  return (
    <nav className="nav">
      <section className="nav__content glass" id="header">
        <div
          onClick={() => scrollToSection(SECTIONS.HERO)}
          className="nav__logo-container"
        >
          <div className="nav__logo">
            <span>M</span>
          </div>
          {!isMobile && <b>Mariana Castañeda</b>}
        </div>
        {!isMobile && (
          <div className="nav__menu-container">
            {menuOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  scrollToSection(option.id);
                  setShowMobileMenu(false);
                }}
                className="nav__menu-mobile-item"
              >
                <AppText
                  tag="span"
                  type={
                    activeSection === option.id ? "nav-item-active" : "nav-item"
                  }
                  children={option.label}
                />
              </button>
            ))}
          </div>
        )}
        <div className="nav__actions-container">
          {/* CHANGE LANGUAGE */}
          <div className="nav__language-container" data-active={lang.use()}>
            <span className="nav__language-indicator" />
            <button
              className={`nav__language-btn ${lang.use() === ENUM_LANGUAGE.ES ? "nav__language-btn--active" : ""}`}
              onClick={() => changeLanguage(ENUM_LANGUAGE.ES)}
            >
              ES
            </button>
            <button
              className={`nav__language-btn ${lang.use() === ENUM_LANGUAGE.EN ? "nav__language-btn--active" : ""}`}
              onClick={() => changeLanguage(ENUM_LANGUAGE.EN)}
            >
              EN
            </button>
          </div>
          {/* CHANGE THEME */}
          <div className="nav__theme-container" data-active={theme.use()}>
            <button
              className="nav__theme-btn-switch"
              onClick={() =>
                changeTheme(
                  theme.get() === ENUM_THEME.LIGHT
                    ? ENUM_THEME.DARK
                    : ENUM_THEME.LIGHT,
                )
              }
            ></button>
            <IconSunLow
              stroke={2}
              width={22}
              className="nav__theme-icon nav__theme-icon--sun"
            />
            <IconMoon
              stroke={2}
              width={16}
              className="nav__theme-icon nav__theme-icon--moon"
            />
          </div>
          {/* MENU ICON MOBILE */}
          {isMobile && (
            <button
              className="nav__menu-mobile-btn"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <IconMenu3
                stroke={2}
                width={24}
                height={24}
                className="nav__menu-mobile-icon"
              />
            </button>
          )}
        </div>
        {/* MENU MOBILE */}
      </section>
      <div
        className="nav__menu-mobile-container glass"
        data-show={showMobileMenu ? "true" : "false"}
      >
        {menuOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => {
              scrollToSection(option.id);
              setShowMobileMenu(false);
            }}
            className="nav__menu-mobile-item"
          >
            <AppText
              tag="span"
              type={
                activeSection === option.id ? "nav-item-active" : "nav-item"
              }
              children={option.label}
            />
          </button>
        ))}
      </div>
    </nav>
  );
};
