// export default function robots() {
//   return {
//     rules: [
//       {
//         userAgent: "Googlebot",
//         allow: ["/"],
//         disallow: ["/private/"],
//       },
//       {
//         userAgent: ["Applebot", "Bingbot"],
//         disallow: ["/"],
//       },
//     ],
//     sitemap: "https://alma-le.com/sitemap.xml",
//   };
// }

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
        allow: ["/", "/img/"], // ✅ Разрешает индексировать картинки
        disallow: ["/private/"],
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        allow: ["/", "/images/", "/img/"], // ✅ Разрешает индексировать картинки
        disallow: ["/admin/"], // Закрытые разделы
      },
      {
        userAgent: "Googlebot-Image", // ✅ Разрешает индексацию картинок Google Images
        allow: ["/images/", "/img/", "/public/"], // ✅ Папки с изображениями
      },
    ],
    sitemap: [
      "https://alma-le.com/sitemap.xml",
      "https://alma-le.com/video-sitemap.xml",
    ],
  };
}
