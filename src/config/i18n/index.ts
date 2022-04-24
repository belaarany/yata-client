import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import * as yup from "yup"

const buildYupLocale = (_: unknown, t: Function): void => {
	yup.setLocale({
		string: {
			min: (args) => t("yup:string.min", args),
			max: (args) => t("yup:string.max", args),
		},
	})
}

i18n.use(initReactI18next).init(
	{
		resources: {
			en: require("./locales/en/translations.json"),
			hu: require("./locales/hu/translations.json"),
		},
		lng: "hu",
		fallbackLng: "en",

		interpolation: {
			escapeValue: false,
		},
	},
	buildYupLocale,
)

export { i18n }
