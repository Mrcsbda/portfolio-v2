// REACT
import { useEffect, useState } from "react";
//HOOKS
import { useActiveSection } from "../../hooks";
//TRANSLATION
import { useTranslation } from "react-i18next";

//STORE
import { useAppStore } from "../../store";
// TYPES
import { ENUM_THEME, SECTIONS } from "../../types/data.types";
// COMPONENTS
import { AppText } from "../AppText/AppText";
// CSS
import "./AppHeader.css";

export const AppHeader = () => {
  const { theme, changeTheme } = useAppStore();
  const { t } = useTranslation("header");
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(true);
  const activeSection = useActiveSection(Object.values(SECTIONS));

  useEffect(() => {
    const themeAux = localStorage.getItem("theme");
    if (!themeAux) {
      changeTheme(ENUM_THEME.LIGHT);
    } else {
      changeTheme(themeAux as ENUM_THEME);
    }
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

  return (
    <nav className="nav">
      <section className="nav__container">
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
                children={option.label}
                color={activeSection === option.id ? "accent" : "text-1"}
                fontWeight="regular"
                fontSize="18px"
              />
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
};
