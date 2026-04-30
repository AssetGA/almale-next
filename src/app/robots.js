export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/private/", "/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: [
          "/",
          "/img/",
          "/video/",
          "/kz/gallery/",
          "/ru/gallery/",
          "/en/gallery/",
        ],
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        allow: ["/", "/images/", "/img/", "/video/"],
        disallow: ["/admin/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: [
          "/images/",
          "/img/",
          "/public/",
          "/video/",
          "/kz/gallery/",
          "/ru/gallery/",
          "/en/gallery/",
        ],
      },
      {
        userAgent: "Googlebot-Video",
        allow: ["/video/", "/ru/gallery/", "/en/gallery/", "/kz/gallery/"],
      },
    ],
    sitemap: [
      "https://alma-le.com/sitemap.xml",
      "https://alma-le.com/sitemap-index.xml",
      "https://alma-le.com/video-sitemap.xml", // Обязательно добавьте видео-карту
    ],
  };
}
