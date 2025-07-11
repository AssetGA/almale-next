// export default function sitemap() {
//   return [
//     {
//       url: "https://alma-le.com/kz",
//       lastModified: new Date(),
//       changeFrequency: "yearly",
//       priority: 1,
//     },
//     {
//       url: "https://alma-le.com/ru",
//       lastModified: new Date(),
//       changeFrequency: "yearly",
//       priority: 1,
//     },
//     {
//       url: "https://alma-le.com/en",
//       lastModified: new Date(),
//       changeFrequency: "yearly",
//       priority: 1,
//     },
//     {
//       url: "https://alma-le.com/kz/product",
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.8,
//     },
//     {
//       url: "https://alma-le.com/ru/product",
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.8,
//     },
//     {
//       url: "https://alma-le.com/en/product",
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.8,
//     },
//     {
//       url: "https://www.alma-le.com/kz/product/671f8ad851c70fa561f432e3",
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.5,
//     },
//     {
//       url: "https://www.alma-le.com/ru/product/671f8ad851c70fa561f432e3",
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.5,
//     },
//     {
//       url: "https://www.alma-le.com/en/product/671f8ad851c70fa561f432e3",
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.5,
//     },
//     {
//       url: "https://www.alma-le.com/kz/product/671f8ad851c70fa561f432e5",
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.5,
//     },
//     {
//       url: "https://www.alma-le.com/ru/product/671f8ad851c70fa561f432e5",
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.5,
//     },
//     {
//       url: "https://www.alma-le.com/en/product/671f8ad851c70fa561f432e5",
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.5,
//     },
//     {
//       url: "https://www.alma-le.com/kz/product/671f8ad851c70fa561f432e6",
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.5,
//     },
//     {
//       url: "https://www.alma-le.com/ru/product/671f8ad851c70fa561f432e6",
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.5,
//     },
//     {
//       url: "https://www.alma-le.com/en/product/671f8ad851c70fa561f432e6",
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.5,
//     },
//     {
//       url: "https://www.alma-le.com/kz/product/671f8ad851c70fa561f432e4",
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.5,
//     },
//     {
//       url: "https://www.alma-le.com/ru/product/671f8ad851c70fa561f432e4",
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.5,
//     },
//     {
//       url: "https://www.alma-le.com/en/product/671f8ad851c70fa561f432e4",
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.5,
//     },
//   ];
// }

// app/sitemap.ts (если у тебя App Router)
import { fetchProducts } from "./actions/products";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.alma-le.com";
  const langs = ["kz", "ru", "en"];
  const pagesLang = langs.map((lang) => {
    return {
      url: `${baseUrl}/${lang}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
    };
  });

  const pagesLangProduct = langs.map((lang) => {
    return {
      url: `${baseUrl}/${lang}/product`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
    };
  });
  const products = await fetchProducts("ru");

  const productUrls = products.map((product) =>
    langs.map((lang) => ({
      url: `${baseUrl}/${lang}/product/${product._id}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
    }))
  );
  console.log("productUrls", productUrls, pagesLang, pagesLangProduct);

  return [...pagesLang, ...productUrls, ...pagesLangProduct];
}
