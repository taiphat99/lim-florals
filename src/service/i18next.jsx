import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import vie from "../translation/vie.json"
import eng from "../translation/eng.json"

i18n
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        // language resources
        resources: {
            en: {
                translation: {
                    vie: vie
                }
            },
            vn: {
                translation: {
                    eng: eng
                }
            },
        }
    });


    xt;