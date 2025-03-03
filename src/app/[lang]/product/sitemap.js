const SUPPORTED_LANGS = ["kz", "en", "ru"];

export async function generateSitemaps() {
  // This can be simplified as we're not doing any asynchronous operations
  const params = SUPPORTED_LANGS.map((lang) => ({ lang }));
  return params;
}

export default async function sitemap({ lang }) {
  // Ensure NEXT_PUBLIC_SITE_URL is defined
  if (!process.env.NEXT_PUBLIC_SITE_URL) {
    console.error("NEXT_PUBLIC_SITE_URL is not defined");
    return [];
  }

  // Generate sitemap entry for the specific language
  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/product`,
      lastModified: new Date().toISOString(),
    },
  ];
}
