export default function robots() {
  return {
    rules: [
      {
        userAgent: "*", // Разрешает всем поисковикам индексировать сайт
        allow: ["/"],
        disallow: ["/private/", "/admin/"], // Закрытые разделы
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/img/", "/video"], // ✅ Разрешает индексировать картинки
        disallow: ["/private/"],
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        allow: ["/", "/images/", "/img/", "/video"], // ✅ Разрешает индексировать картинки
        disallow: ["/admin/"], // Закрытые разделы
      },
      {
        userAgent: "Googlebot-Image", // ✅ Разрешает индексацию картинок Google Images
        allow: ["/images/", "/img/", "/public/", "/video/"], // ✅ Папки с изображениями
      },
    ],
    sitemap: [
      "https://alma-le.com/sitemap.xml",
      "https://alma-le.com/sitemap-index.xml",
      "https://alma-le.com/video-sitemap.xml",
    ],
  };
}
