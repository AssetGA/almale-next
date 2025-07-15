import fs from "fs";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.alma-le.com";

async function fetchVideoSeo(lang) {
  try {
    const url = new URL(`${siteUrl}/lib/api/video`);
    url.searchParams.append("lang", lang); // Добавляем параметр lang
    const res = await fetch(url.href);
    if (!res.ok) throw new Error("Ошибка при загрузке товаров");
    const videos = await res.json();
    return videos;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Возвращаем пустой массив, если произошла ошибка
  }
}

async function generateVideoSitemap() {
  const langs = ["kz", "ru", "en"];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  sitemap += `        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n`;

  for (const lang of langs) {
    const videos = await fetchVideoSeo(lang); // ждем список видео
    for (let i = 0; i < videos.length; i++) {
      const video = videos[i];

      const videoSrcNew = video.videoUrl.startsWith("/")
        ? `<video:content_loc>${video.videoUrl}</video:content_loc>\n`
        : `<video:player_loc allow_embed='yes' autoplay='ap=1'>${video.videoUrl}</video:player_loc>\n`;
      sitemap += `  <url>\n`;
      sitemap += `    <loc>${siteUrl}/${lang}/gallery/${video._id}</loc>\n`;
      sitemap += `    <video:video>\n`;
      sitemap += `      <video:title><![CDATA[${
        video.title || "Video"
      }]]></video:title>\n`;
      sitemap += `      <video:description><![CDATA[${
        video.description || "Alma`le лудшая посуда для приготовления блюд"
      }]]></video:description>\n`;
      sitemap += `      <video:thumbnail_loc>${siteUrl}/img/gallery/${
        i + 1
      }.JPEG</video:thumbnail_loc>\n`;
      sitemap += `      ${videoSrcNew}`;
      sitemap += `      <video:publication_date>${new Date().toISOString()}</video:publication_date>\n`;
      sitemap += `    </video:video>\n`;
      sitemap += `  </url>\n`;
    }
  }

  sitemap += `</urlset>`;

  fs.writeFileSync(
    path.resolve(__dirname, "../public/video-sitemap.xml"),
    sitemap
  );
  console.log("✅ video-sitemap.xml создан");
}

generateVideoSitemap();
