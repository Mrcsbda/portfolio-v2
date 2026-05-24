import i18next from 'i18next';
import { initReactI18next } from "react-i18next";

//imports en
import header_en from './en/en.header.json';

// imports es
import header_es from './es/es.header.json';

const resources = {
    en: {
        header: header_en
    },
    es: {
        header: header_es
    },
};

i18next.use(initReactI18next).init({
    lng: 'es',
    debug: false,
    resources,
});

export default i18next;