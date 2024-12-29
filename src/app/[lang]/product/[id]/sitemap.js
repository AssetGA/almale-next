import { fetchProducts } from "./page";

const SUPPORTED_LANGS = ["en", "ru", "kz"];

export default async function sitemap() {
  const sitemapUrls = [];

  await Promise.all(
    SUPPORTED_LANGS.map(async (lang) => {
      const products = await fetchProducts(lang);

      const productSet = products.filter((elem) => {
        return (
          elem._id !== "675a1528abab837f85c2555c" ||
          elem._id !== "674a3cf6deec0f0dd2b22010"
        );
      });

      productSet.forEach((product) => {
        sitemapUrls.push({
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/product/${product._id}`,
          lastModified: product.date
            ? new Date(product.date).toISOString()
            : new Date().toISOString(),
        });
      });
    })
  );

  return sitemapUrls;
}
