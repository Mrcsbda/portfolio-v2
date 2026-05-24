import { appStoreState } from "..";
import i18n from "../../../translation/config.translation";
import type { ENUM_LANGUAGE } from "../../types/data.types";

export const changeLanguage = (language: ENUM_LANGUAGE) => {
    document.documentElement.setAttribute("lang", language);
    localStorage.setItem('lang', language)
    appStoreState.getState().setState('lang', language);
    i18n.changeLanguage(language);
};