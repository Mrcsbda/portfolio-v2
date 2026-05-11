import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppStore } from "../../store";
import { ENUM_THEME } from "../../types/data.types";
import { AppText } from "../AppText/AppText";
import "./AppHeader.css";

export const AppHeader = () => {
  const { theme, changeTheme } = useAppStore();
  const { t } = useTranslation("header");
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    const themeAux = localStorage.getItem("theme");
    if (!themeAux) {
      changeTheme(ENUM_THEME.LIGHT);
    } else {
      changeTheme(themeAux as ENUM_THEME);
    }
  }, []);

  return (
    <nav className="nav">
      <section className="nav__inner">
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
      </section>
    </nav>
  );
};
