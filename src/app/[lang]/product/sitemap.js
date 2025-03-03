const SUPPORTED_LANGS = ["kz", "en", "ru"];

// Генерация статических параметров
export async function generateStaticParams() {
  console.log("Generating static params for product sitemap");

  try {
    // Возвращаем корректный формат параметров
    const params = SUPPORTED_LANGS.map((lang) => {
      console.log(`Processing language for product: ${lang}`);
      return { params: { lang } }; // Добавлено обертка в params
    });

    console.log("Generated params for product:", params);
    return params;
  } catch (error) {
    console.error("Error in generateStaticParams for product:", error);
    return [];
  }
}

// Функция генерации карты сайта
export default async function sitemap({ params }) {
  console.log("Generating product sitemap with params:", params);

  // Проверка на наличие URL сайта
  if (!process.env.NEXT_PUBLIC_SITE_URL) {
    console.error("NEXT_PUBLIC_SITE_URL is not defined");
    return [];
  }

  try {
    // Деструктурируем lang из params, проверяем наличие
    const { lang } = params ?? {};
    if (!lang) {
      console.error("Language parameter is undefined for product");
      return [];
    }

    // Создаем запись для карты сайта
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
