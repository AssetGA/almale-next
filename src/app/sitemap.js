import { fetchProducts } from "./actions/products";
import { fetchVideo } from "./actions/video";
import { images } from "./utils/api";

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
