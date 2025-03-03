const SUPPORTED_LANGS = ["kz", "en", "ru"];

export async function generateSitemaps() {
  const params = [];

  await Promise.all(
    SUPPORTED_LANGS.map(async (lang) => {
      params.push({ lang });
    })
  );

  return params; // Return parameters for static generation
}

export default async function sitemap({ lang }) {
  return {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/product`,
    lastModified: new Date().toISOString(),
  };
}
