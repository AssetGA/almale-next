const axios = require("axios");

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://alma-le.com",
  generateRobotsTxt: true, // Создать robots.txt
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/api/*", "/_next/*", "/img/*", "/fonts/*", "/favicon.ico"],
  transform: async (config, path) => {
    // Локали для маршрутов
    const locales = ["kz", "en", "ru"];
    const defaultLocale = "kz";

    // Пример: обработка статических маршрутов
    if (path === "/") {
      return locales.map((locale) => ({
        loc: `/${locale}${path}`,
        lastmod: new Date().toISOString(),
        changefreq: config.changefreq,
        priority: config.priority,
      }));
    }

    return null; // Пусть другие маршруты обрабатываются как есть
  },
};
