import { appStore } from "..";
import type { ENUM_THEME } from "../../types/data.types";

export const changeTheme = (value: ENUM_THEME) => {
    const { theme, changeFavicon } = appStore()
    document.documentElement.setAttribute('data-theme', value)
    localStorage.setItem('theme', value)
    changeFavicon(value);
    theme.set(value);

};