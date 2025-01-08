import { fetchProducts } from "./page";

const SUPPORTED_LANGS = ["kz", "en", "ru"];

export async function generateSitemaps() {
  const params = [];

  await Promise.all(
    SUPPORTED_LANGS.map(async (lang) => {
      const products = await fetchProducts(lang);

      if (products.length === 0) {
        console.warn(`No products found for language: ${lang}`);
        return;
      }
      const productSet = products.filter((elem) => {
        return elem.price !== 395000;
      });

      productSet.forEach((product) => {
        params.push({ lang, id: product._id });
      });
    })
  );

  return params; // Return parameters for static generation
}

export default async function sitemap({ lang, id }) {
  const products = await fetchProducts(lang);

  return products.map((product) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/product/${id}`,
    lastModified: product.date
      ? new Date(product.date).toISOString()
      : new Date().toISOString(),
  }));
}
