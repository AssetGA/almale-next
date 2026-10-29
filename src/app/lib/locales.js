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

export function siteOrigin() {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://www.alma-le.com").replace(
    /\/+$/,
    ""
  );
}

export function normalizePath(path = "") {
  if (!path || path === "/") return "";
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.replace(/\/+$/, "");
}

export function canonicalUrl(lang, path = "") {
  return `${siteOrigin()}/${lang}${normalizePath(path)}`;
}

export function languageAlternates(baseUrl, path = "") {
  const origin = String(baseUrl || siteOrigin()).replace(/\/+$/, "");
  const suffix = normalizePath(path);
  return {
    ru: `${origin}/ru${suffix}`,
    en: `${origin}/en${suffix}`,
    de: `${origin}/de${suffix}`,
    ar: `${origin}/ar${suffix}`,
    kk: `${origin}/kz${suffix}`,
    "x-default": `${origin}/${defaultLocale}${suffix}`,
  };
}

export function pageAlternates(lang, path = "") {
  const suffix = normalizePath(path);
  return {
    canonical: canonicalUrl(lang, suffix),
    languages: languageAlternates(siteOrigin(), suffix),
  };
}

export function noIndexMetadata(lang, path) {
  return {
    robots: { index: false, follow: false },
    alternates: { canonical: canonicalUrl(lang, path) },
  };
}
