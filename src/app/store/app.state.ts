import { ENUM_LANGUAGE, ENUM_THEME } from "../types/data.types";
import type { IAppState } from "../types/store.types";

export const initialAppState: IAppState = {
    theme: ENUM_THEME.LIGHT,
    lang: ENUM_LANGUAGE.ES
};