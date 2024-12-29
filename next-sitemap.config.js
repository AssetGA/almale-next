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
  additionalPaths: async (config) => {
    const locales = ["kz", "en", "ru"];
    const dynamicPaths = [];

    try {
      // Fetch product data for each locale
      for (const locale of locales) {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/product`,
          {
            params: { lang: locale },
          }
        );

        const products = response.data;

        // Generate paths for products
        products.forEach((product) => {
          dynamicPaths.push({
            loc: `/${locale}/product/${product._id}`,
            lastmod: new Date(product.date).toISOString(), // Adjust if you have a specific last modification date
            changefreq: "weekly", // You can adjust this based on your update frequency
            priority: 0.8,
          });
        });
      }
    } catch (error) {
      console.error("Error fetching product data for sitemap:", error.message);
    }

    return dynamicPaths;
  },
};
