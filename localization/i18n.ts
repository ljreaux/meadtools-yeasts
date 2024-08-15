import i18n from 'i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          greeting: "Hello",
          navbar: {
            theme: {
              light: 'Light',
              dark: 'Dark',
              system: 'System'
            }
          },
          title: "Yeast Table",
          searchPlaceholder: "Filter by yeast name...",
          units: {
            title: 'Temperature Units',
            celsius: '°C',
            fahrenheit: '°F'
          },
          brandPlaceholder: "Filter by brand...",
          brands: {
            lalvin: 'Lalvin',
            mangrove: 'Mangrove Jack',
            fermentis: 'Fermentis',
            redstar: 'Red Star',
            other: 'Other',
            clear: "Clear"
          },
          tableHeadings: {
            brand: "Brand",
            name: "Name",
            nitrogen_requirement: "Nitrogen Requirement",
            tolerance: "Tolerance",
            low_temp: "Low Temperature",
            high_temp: "High Temperature",
          },
          nitrogenOptions: {
            low: 'Low',
            medium: 'Medium',
            high: 'High',
            veryHigh: "Very High"
          }
        }
      },
      de: {
        translation: {
          greeting: "Hallo",
          navbar: {
            theme: {
              light: 'Light',
              dark: 'Dark',
              system: 'System'
            }
          },
          title: "Yeast Table",
          searchPlaceholder: "Filter by yeast name...",
          units: {
            title: 'Temperature Units',
            celsius: '°C',
            fahrenheit: '°F'
          },
          brandPlaceholder: "Filter by brand...",
          brands: {
            lalvin: 'Lalvin',
            mangrove: 'Mangrove Jack',
            fermentis: 'Fermentis',
            redstar: 'Red Star',
            other: 'Other',
            clear: "Clear"
          },
          tableHeadings: {
            brand: "Brand",
            name: "Name",
            nitrogen_requirement: "Nitrogen Requirement",
            tolerance: "Tolerance",
            low_temp: "Low Temperature",
            high_temp: "High Temperature",
          },
          nitrogenOptions: {
            low: 'Low',
            medium: 'Medium',
            high: 'High',
            veryHigh: "Very High"
          }
        }
      }
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
