const fs = require("fs");
const path = require("path");
const { fetchVideo } = require("../actions/video");

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.alma-le.com";

async function generateVideoSitemap() {
  const langs = ["kz", "ru", "en"];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  sitemap += `        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n`;

  for (const lang of langs) {
    const videos = await fetchVideo(lang); // ждем список видео
    for (let i = 0; i < videos.length; i++) {
      const video = videos[i];

      sitemap += `  <url>\n`;
      sitemap += `    <loc>${siteUrl}/${lang}/gallery/${video._id}</loc>\n`;
      sitemap += `    <video:video>\n`;
      sitemap += `      <video:title><![CDATA[${
        video.title || "Video"
      }]]></video:title>\n`;
      sitemap += `      <video:description><![CDATA[${
        video.description || "Description"
      }]]></video:description>\n`;
      sitemap += `      <video:thumbnail_loc>${siteUrl}/img/gallery/${
        i + 1
      }.JPEG</video:thumbnail_loc>\n`;
      sitemap += `      <video:content_loc>${siteUrl}${video.videoUrl}</video:content_loc>\n`;
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
