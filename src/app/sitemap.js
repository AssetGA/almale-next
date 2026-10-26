import { fetchProducts } from "./actions/products";
import { fetchVideo } from "./actions/video";
import { images } from "./utils/api";
import { languageAlternates, locales } from "./lib/locales";

// app/sitemap.ts (если у тебя App Router)import { fetchProducts } from "./actions/products";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.alma-le.com";
  const langs = locales;

  const staticPages = langs.flatMap((lang) =>
    [
      { path: "", priority: 1 },
      { path: "/product", priority: 0.9 },
      { path: "/gallery", priority: 0.6 },
      { path: "/gift", priority: 0.8 },
      { path: "/recipes", priority: 0.8 },
      { path: "/set", priority: 0.8 },
      { path: "/instagram", priority: 0.5 },
    ].map((page) => ({
      url: `${baseUrl}/${lang}${page.path}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: page.priority,
      alternates: {
        languages: languageAlternates(baseUrl, page.path),
      },
    }))
  );

  const products = await fetchProducts("ru");

  const productPages = products.flatMap((product) => {
    return langs.map((lang) => ({
      url: `${baseUrl}/${lang}/product/${product._id}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: languageAlternates(baseUrl, `/product/${product._id}`),
      },
    }));
  });

  const videoList = await Promise.all(
    langs.map(async (lang) => {
      const videos = await fetchVideo(lang); // массив
      return videos.map((video) => ({ lang, video }));
    })
  );

  const videoEntries = videoList.flatMap((items, index) =>
    items.map(({ lang, video }) => ({
      url: `${baseUrl}/${lang}/gallery/${video._id}`,
      video: {
        title: video.title || "Product Video",
        description: video.description || "Video of the product",
        thumbnailLoc:
          images[index] !== undefined
            ? `${baseUrl}${images[index]}`
            : `${baseUrl}/img/gallery/1.JPEG`,
        contentLoc: video.videoUrl.startsWith("/")
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
