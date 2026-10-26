export const locales = ["kz", "en", "ru", "de", "ar"];
export const defaultLocale = "kz";

export const localeParams = locales.map((lang) => ({ lang }));

export function htmlLang(lang) {
  if (lang === "kz") return "kk";
  return lang;
}

export function currencySuffix(lang) {
  if (lang === "de") return "Tenge";
  if (lang === "ar") return "تينغي";
  if (lang === "en") return "tenge";
  return "тг";
}

export function languageAlternates(baseUrl, path = "") {
  const suffix = path;
  return {
    ru: `${baseUrl}/ru${suffix}`,
    en: `${baseUrl}/en${suffix}`,
    de: `${baseUrl}/de${suffix}`,
    ar: `${baseUrl}/ar${suffix}`,
    kk: `${baseUrl}/kz${suffix}`,
    "x-default": `${baseUrl}/ru${suffix}`,
  };
}
