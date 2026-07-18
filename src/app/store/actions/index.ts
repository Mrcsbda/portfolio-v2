import type { IAppActions } from "../../types/store.types";
import { changeFavicon } from "./change-favicon.action";
import { changeLanguage } from "./change-language.action";
import { changeTheme } from "./change-theme.action";

export const appActions: IAppActions = {
    changeLanguage,
    changeTheme,
    changeFavicon
};
