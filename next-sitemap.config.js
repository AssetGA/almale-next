// async function fetchProducts(lang) {
//   console.log("fetch lang", lang);
//   try {
//     const url = new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/lib/api/product`);
//     url.searchParams.append("lang", lang); // Добавляем параметр lang
//     const res = await fetch(url.toString());
//     // const res = await fetch(
//     //   `${process.env.NEXT_PUBLIC_SITE_URL}/lib/api/product`,
//     //   {
//     //     params: { lang: lang },
//     //   }
//     // ); // Замените на URL вашего API
//     if (!res.ok) throw new Error("Ошибка при загрузке товаров");
//     const products = await res.json();
//     return products;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return []; // Возвращаем пустой массив, если произошла ошибка
//   }
// }

// module.exports = {
//   siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://alma-le.com",
//   generateRobotsTxt: true, // Создать robots.txt
//   changefreq: "daily",
//   priority: 0.7,
//   exclude: ["/api/*", "/_next/*", "/img/*", "/fonts/*", "/favicon.ico"],
//   transform: async (config, path) => {
//     // Локали для маршрутов
//     const locales = ["kz", "en", "ru"];
//     const defaultLocale = "kz";

//     // Пример: обработка статических маршрутов
//     if (path === "/") {
//       return locales.map((locale) => ({
//         loc: `/${locale}${path}`,
//         lastmod: new Date().toISOString(),
//         changefreq: config.changefreq,
//         priority: config.priority,
//       }));
//     }

//     return null; // Пусть другие маршруты обрабатываются как есть
//   },
//   additionalPaths: async (config) => {
//     const locales = ["kz", "en", "ru"];
//     const dynamicPaths = [];

//     try {
//       // Fetch product data for each locale
//       for (const locale of locales) {
//         const products = await fetchProducts(locale);

//         const productSet = products.filter((elem) => {
//           return (
//             elem._id !== "675a1528abab837f85c2555c" ||
//             elem._id !== "674a3cf6deec0f0dd2b22010"
//           );
//         });
//         console.log("productsSet", productSet);

//         // Generate paths for products
//         productSet.forEach((product) => {
//           dynamicPaths.push({
//             loc: `/${locale}/product/${product._id}`,
//             lastmod: new Date(product.date).toISOString(), // Adjust if you have a specific last modification date
//             changefreq: "weekly", // You can adjust this based on your update frequency
//             priority: 0.8,
//           });
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching product data for sitemap:", error.message);
//     }

//     return dynamicPaths;
//   },
// };
