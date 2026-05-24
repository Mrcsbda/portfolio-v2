import { ENUM_LANGUAGE, ENUM_THEME } from "../types/data.types";
import type { IAppState } from "../types/store.types";

export const initialAppState: IAppState = {
    theme: (localStorage.getItem('theme') as ENUM_THEME) ?? ENUM_THEME.LIGHT,
    lang: (localStorage.getItem('lang') as ENUM_LANGUAGE) ?? ENUM_LANGUAGE.ES,
};