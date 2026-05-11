import { appStoreState } from "..";
import type { ENUM_THEME } from "../../types/data.types";

export const changeTheme = (value: ENUM_THEME) => {
    document.documentElement.setAttribute('data-theme', value)
    localStorage.setItem('theme', value)
    appStoreState.getState().setState('theme', value);
};