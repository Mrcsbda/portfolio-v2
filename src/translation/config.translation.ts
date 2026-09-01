import i18next from 'i18next';
import { initReactI18next } from "react-i18next";

//imports en
import header_en from './en/en.header.json';
import hero_en from './en/en.hero.json';
import journey_en from './en/en.journey.json';
import projects_en from './en/eN.projects.json';
import stack_en from './en/en.stack.json';

// imports es
import header_es from './es/es.header.json';
import hero_es from './es/es.hero.json';
import journey_es from './es/es.journey.json';
import projects_es from './es/es.projects.json';
import stack_es from './es/es.stack.json';

const resources = {
    en: {
        header: header_en,
        hero: hero_en,
        journey: journey_en,
        stack: stack_en,
        projects: projects_en
    },
    es: {
        header: header_es,
        hero: hero_es,
        journey: journey_es,
        stack: stack_es,
        projects: projects_es
    },
};

i18next.use(initReactI18next).init({
    lng: 'es',
    debug: false,
    resources,
});

export default i18next;