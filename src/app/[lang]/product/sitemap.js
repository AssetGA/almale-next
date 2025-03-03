const SUPPORTED_LANGS = ["kz", "en", "ru"];

export async function generateSitemaps() {
  const params = [];

  await Promise.all(
    SUPPORTED_LANGS.map(async (lang) => {
      productSet.forEach(() => {
        params.push({ lang });
      });
    })
  );

  return params; // Return parameters for static generation
}

export default async function sitemap({ lang }) {
  return {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/product`,
    lastModified: productSet.date
      ? new Date(product.date).toISOString()
      : new Date().toISOString(),
  };
}
