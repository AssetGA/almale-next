const SUPPORTED_LANGS = ["kz", "en", "ru"];

export async function generateStaticParams() {
  console.log("Generating static params for product sitemap");
  try {
    const params = SUPPORTED_LANGS.map((lang) => {
      console.log(`Processing language for product: ${lang}`);
      return { lang };
    });
    console.log("Generated params for product:", params);
    return params;
  } catch (error) {
    console.error("Error in generateStaticParams for product:", error);
    return [];
  }
}

export default async function sitemap({ params }) {
  console.log("Generating product sitemap with params:", params);

  if (!process.env.NEXT_PUBLIC_SITE_URL) {
    console.error("NEXT_PUBLIC_SITE_URL is not defined");
    return [];
  }

  try {
    const { lang } = params;
    if (!lang) {
      console.error("Language parameter is undefined for product");
      return [];
    }

    const entry = {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/product`,
      lastModified: new Date().toISOString(),
    };
    console.log("Generated product sitemap entry:", entry);
    return [entry];
  } catch (error) {
    console.error("Error in product sitemap generation:", error);
    return [];
  }
}
