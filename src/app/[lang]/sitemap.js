const SUPPORTED_LANGS = ["kz", "en", "ru"];

export async function generateSitemaps() {
  // Simplify this function as it doesn't need to be asynchronous
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
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
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}`,
      lastModified: new Date().toISOString(),
    },
  ];
}
