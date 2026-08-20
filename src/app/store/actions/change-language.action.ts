import { appStore } from "@app/store";
import type { ENUM_LANGUAGE } from "@app/types";
import i18n from "@translation/config.translation";

export const changeLanguage = (language: ENUM_LANGUAGE) => {
    const { lang } = appStore()
    document.documentElement.setAttribute("lang", language);
    localStorage.setItem('lang', language)
    lang.set(language);
    i18n.changeLanguage(language);
};