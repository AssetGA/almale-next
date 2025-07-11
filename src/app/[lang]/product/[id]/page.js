import { fetchProducts } from "../../../actions/products";
import ProductAbout from "../../../components/ProductAbout";
import { getDictionary } from "../../dictionaries";

export async function getServerSideProps({ req }) {
  // Извлекаем язык из URL
  const { pathname } = req;
  const langMatch = pathname.match(/^\/(kz|en|ru)(\/|$)/);
  const lang = langMatch ? langMatch[1] : "kz"; // Если язык найден, берем его, иначе — 'kz'

  // Возвращаем данные как props для компонента
  return {
    props: {
      lang,
    },
  };
}

export async function generateMetadata({ params }) {
  const { id, lang } = await params;

  const products = await fetchProducts(lang);

  const productSet = products.filter((elem) => {
    return elem.price !== 395000;
  });

  const product = productSet.find((elem) => {
    return elem._id === id;
  });
  if (!product) {
    console.error(`❌ Ошибка: Товар с ID ${id} не найден`);
    return {
      title: "Товар не найден | Alma Le",
      description: "Извините, этот товар недоступен.",
    };
  }
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return {
    title: `${product.title}`,
    description: product.descriptionMeta,
    alternates: {
      languages: {
        "x-default": `${baseUrl}/ru/product/${id}`,
        en: `${baseUrl}/en/product/${id}`,
        ru: `${baseUrl}/ru/product/${id}`,
        kk: `${baseUrl}/kz/product/${id}`,
      },
    },
    keywords: product.keywords,
    openGraph: {
      title: `${product.title}`,
      description: `${product.descriptionMeta}`,
      images: [`${process.env.NEXT_PUBLIC_SITE_URL}${product.imageUrl}`], // ✅ Supports array
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/product/${id}`,
    },
  };
}

export async function generateStaticParams() {
  // Укажите возможные значения для [lang] и [id]
  const langs = ["kz", "en", "ru"]; // Например, поддерживаемые языки
  const params = [];

  for (const lang of langs) {
    const products = await fetchProducts(lang); // Получаем продукты для текущего языка

    if (products.length === 0) {
      console.warn(`No products found for language: ${lang}`);
      continue; // Пропускаем, если для языка нет продуктов
    }

    // Преобразуем список продуктов в массив id
    const productIds = products.map((elem) => elem._id);

    productIds.forEach((id) => {
      params.push({ lang, id });
    });
  }

  return params; // Возвращаем параметры для генерации статичных страниц
}

export default async function Page({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return <ProductAbout lang={lang} t={t} />;
}
