import i18next from 'i18next';
import { initReactI18next } from "react-i18next";

//imports en
import header_en from './en/en.header.json';
import hero_en from './en/en.hero.json';
import journey_en from './en/en.journey.json';

// imports es
import header_es from './es/es.header.json';
import hero_es from './es/es.hero.json';
import journey_es from './es/es.journey.json';

const resources = {
    en: {
        header: header_en,
        hero: hero_en,
        journey: journey_en
    },
    es: {
        header: header_es,
        hero: hero_es,
        journey: journey_es
    },
};

i18next.use(initReactI18next).init({
    lng: 'es',
    debug: false,
    resources,
});

export default i18next;