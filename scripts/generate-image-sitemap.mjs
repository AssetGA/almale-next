import fs from "fs";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.alma-le.com";

const langs = ["kz", "ru", "en"];

async function fetchProducts(lang) {
  try {
    const res = await fetch(`${siteUrl}/lib/api/product?lang=${lang}`);

    if (!res.ok) throw new Error("Ошибка при загрузке товаров");
    const products = await res.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Возвращаем пустой массив, если произошла ошибка
  }
}

async function generateImageSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  sitemap += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  for (const lang of langs) {
    const products = await fetchProducts(lang);

    for (const product of products) {
      const productUrl = `${siteUrl}/${lang}/product/${product._id}`;
      sitemap += `  <url>\n`;
      sitemap += `    <loc>${productUrl}</loc>\n`;
      if (product.image) {
        sitemap += `    <image:image>\n`;
        sitemap += `      <image:loc>${siteUrl}${product.imageUrl}</image:loc>\n`;
        sitemap += `      <image:title><![CDATA[${
          product.name || ""
        }]]></image:title>\n`;
        sitemap += `    </image:image>\n`;
      }
      sitemap += `  </url>\n`;
    }
  }

  sitemap += `</urlset>\n`;

  fs.writeFileSync(
    path.resolve(__dirname, "../public/image-sitemap.xml"),
    sitemap
  );
  console.log("✅ image-sitemap.xml создан");
}

generateImageSitemap();
