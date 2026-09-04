# Portfolio v2 — Mariana Castañeda

Personal single-page site (static SPA) built with React 19, TypeScript and Vite.
Includes light/dark theme, bilingual support (ES/EN) and a downloadable CV in both languages.

> Repo: https://github.com/Mrcsbda/portfolio-v2

## Stack

| Area            | Tool                                           |
| --------------- | ---------------------------------------------- |
| UI              | React 19 + TypeScript                          |
| Build           | Vite 8                                         |
| State           | Zustand 5 (with `devtools`)                    |
| i18n            | i18next + react-i18next                        |
| Icons           | @tabler/icons-react + Material Symbols Rounded |
| Styles          | Plain CSS per component + CSS variables        |
| Lint            | ESLint 9 (flat config) + typescript-eslint     |
| Package manager | Yarn (`yarn.lock`)                             |

## Requirements

- Node.js 20+ (required by Vite 8)
- Yarn

## Getting started

```bash
yarn install
yarn dev        # dev server with HMR
yarn build      # type-check (tsc -b) + production build into dist/
yarn preview    # serve the production build
yarn lint       # run ESLint across the project
```

## Project structure

```
src/
├── main.tsx                  # entry: mounts <App/> inside I18nextProvider
├── app/                      # everything shared across the app
│   ├── common/               # generic helpers and types (store adapter)
│   ├── components/           # header, footer, background, buttons, text
│   ├── hooks/                # useValidateScreen (mobile breakpoint < 860px)
│   ├── store/                # global state (Zustand)
│   │   ├── app.state.ts      # initial state (reads localStorage)
│   │   ├── app.mutations.ts  # generic per-field setState
│   │   ├── actions/          # changeTheme, changeLanguage, changeFavicon
│   │   └── helpers/          # scrollToSection
│   ├── types/                # enums (ENUM_THEME, ENUM_LANGUAGE, SECTIONS) and store interfaces
│   └── views/app-view/       # page composition + global CSS tokens
├── modules/                  # one folder per page section
│   ├── hero/                 # intro + animated visual
│   ├── journey/              # career timeline with per-step animations
│   ├── stack/                # technologies (current vs. learning)
│   ├── projects/             # featured projects + other projects
│   └── contact/              # contact
└── translation/              # i18next config + JSON per language and namespace
public/
└── favicon-light.svg | favicon-dark.svg
```

Every module follows the same pattern: `main/` for the section, `components/` for its internal pieces, and `types/` where needed. Each component keeps its `.css` next to it.
