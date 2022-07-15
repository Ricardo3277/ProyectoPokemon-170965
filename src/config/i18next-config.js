import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    lng: 'es',
    fallbackLng: 'es',
    resources: {
        es: {
            translation: {
                title: 'Bienvenidos a la Pokedex de Ricardo',
            },
        },
        en: {
            translation: {
                title: 'Welcome to the Pokedex de Ricardo',
            },
        }
    }
})
export default i18next-config