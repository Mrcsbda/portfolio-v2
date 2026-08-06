import { appStore } from "@app/store";
import i18n from "@translation/config.translation";
import type { ENUM_LANGUAGE } from "@app/types/data.types";

export const changeLanguage = (language: ENUM_LANGUAGE) => {
    const { lang } = appStore()
    document.documentElement.setAttribute("lang", language);
    localStorage.setItem('lang', language)
    lang.set(language);
    i18n.changeLanguage(language);
};