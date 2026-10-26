// next-sitemap.config.js
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.alma-le.com";

module.exports = {
  siteUrl,
  generateRobotsTxt: false,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  alternateRefs: [
    { href: `${siteUrl}/en`, hreflang: "en" },
    { href: `${siteUrl}/ru`, hreflang: "ru" },
    { href: `${siteUrl}/kz`, hreflang: "kz" },
    { href: `${siteUrl}/de`, hreflang: "de" },
    { href: `${siteUrl}/ar`, hreflang: "ar" },
  ],
  transform: async (config, path) => {
    // Поддержка hreflang для всех маршрутов
    const langs = ["en", "ru", "kz", "de", "ar"];
    const alternateRefs = langs.map((lang) => ({
      href: `${siteUrl}/${lang}${path}`,
      hreflang: lang,
    }));

    return {
      loc: `${siteUrl}${path}`,
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs,
    };
  },
  additionalSitemaps: [
    `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.alma-le.com"
    }/video-sitemap.xml`,
    `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.alma-le.com"
    }/image-sitemap.xml`,
  ],
};
