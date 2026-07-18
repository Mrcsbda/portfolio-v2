import { ENUM_LANGUAGE, ENUM_THEME } from './data.types';

export interface IAppState {
  theme: ENUM_THEME
  lang: ENUM_LANGUAGE
}

export interface IAppActions {
  changeTheme: (theme: ENUM_THEME) => void;
  changeLanguage: (language: ENUM_LANGUAGE) => void;
  changeFavicon: (theme: string) => void;
}

export interface IAppMutations {
  setState: <K extends keyof IAppState>(field: K, value: IAppState[K]) => void;
}

export type IAppStore = IAppState & IAppActions & IAppMutations;
