export const ENUM_THEME = {
    LIGHT: 'light',
    DARK: 'dark'
} as const

export type ENUM_THEME = typeof ENUM_THEME[keyof typeof ENUM_THEME]

export const ENUM_LANGUAGE = {
    EN: 'en',
    ES: 'es'
} as const

export type ENUM_LANGUAGE = typeof ENUM_LANGUAGE[keyof typeof ENUM_LANGUAGE]