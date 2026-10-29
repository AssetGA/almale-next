import { fetchProducts } from "../../../actions/products";
import { isCookwareSet } from "../../../lib/catalog";
import { locales } from "../../../lib/locales";

const SUPPORTED_LANGS = locales;

export async function generateSitemaps() {
  const params = [];

  await Promise.all(
    SUPPORTED_LANGS.map(async (lang) => {
      const products = await fetchProducts(lang);

      if (products.length === 0) {
        console.warn(`No products found for language: ${lang}`);
        return;
      }
      const productSet = products.filter((elem) => !isCookwareSet(elem));

      productSet.forEach((product) => {
        params.push({ lang, id: product._id });
      });
    })
  );

  return params; // Return parameters for static generation
}

export default async function sitemap({ lang, id }) {
  const products = await fetchProducts(lang);

  const product = products.find(
    (item) => String(item._id) === String(id) && !isCookwareSet(item)
  );
  if (!product) return [];

  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/product/${id}`,
      lastModified: product.date
        ? new Date(product.date).toISOString()
        : new Date().toISOString(),
    },
  ];
}
