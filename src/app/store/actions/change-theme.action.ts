import { useAppStore } from "..";
import type { ENUM_THEME } from "../../types/data.types";

export const changeTheme = (value: ENUM_THEME) => {
    const { theme } = useAppStore();

    document.documentElement.setAttribute('data-theme', value)
    localStorage.setItem('theme', value)
    theme.set(value);
};