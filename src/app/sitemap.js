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

import { fetchProducts } from "./actions/products";
import { fetchVideo } from "./actions/video";

// app/sitemap.ts (если у тебя App Router)import { fetchProducts } from "./actions/products";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.alma-le.com";
  const langs = ["kz", "ru", "en"];

  const staticPages = langs.flatMap((lang) => [
    {
      url: `${baseUrl}/${lang}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
      alternateRefs: langs.map((l) => ({
        href: `${baseUrl}/${l}`,
        hreflang: l,
      })),
    },
    {
      url: `${baseUrl}/${lang}/product`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
      alternateRefs: langs.map((l) => ({
        href: `${baseUrl}/${l}/product`,
        hreflang: l,
      })),
    },
  ]);

  const products = await fetchProducts("ru");

  const productPages = products.flatMap((product) => {
    return langs.map((lang) => ({
      url: `${baseUrl}/${lang}/product/${product._id}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
      alternateRefs: langs.map((l) => ({
        href: `${baseUrl}/${l}/product/${product._id}`,
        hreflang: l,
      })),
    }));
  });

  const videoList = await Promise.all(
    langs.map(async (lang) => {
      const videos = await fetchVideo(lang); // массив
      return videos.map((video) => ({ lang, video }));
    })
  );

  const videoEntries = videoList.flatMap((items) =>
    items.map(({ lang, video }) => ({
      url: `${baseUrl}/${lang}/gallery/${video._id}`,
      video: {
        title: video.title || "Product Video",
        description: video.description || "Video of the product",
        thumbnailLoc: video.videoUrl?.startsWith("/")
          ? `${baseUrl}${video.videoUrl}`
          : video.videoUrl,
        contentLoc: video.videoUrl?.startsWith("/")
          ? `${baseUrl}${video.videoUrl}`
          : video.videoUrl,
        publicationDate: new Date().toISOString(),
      },
    }))
  );

  const videoPages = videoEntries.map((entry) => {
    return {
      url: entry.url,
      video: entry.video,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });

  return [...staticPages, ...productPages, ...videoPages];
}
