import { ENUM_THEME } from "@app/types/data.types";

export const changeFavicon = (theme: string) => {
    if (theme === ENUM_THEME.DARK) {
        const favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
        if (favicon) {
            favicon.href = "/favicon-dark.svg";
        }
    } else {
        const favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
        if (favicon) {
            favicon.href = "/favicon-light.svg";
        }
    }
}