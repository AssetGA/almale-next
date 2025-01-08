import fetch from "node-fetch";
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
    return elem.price === 395000;
  });
  const product = productSet.find((elem) => {
    return elem._id === id;
  });
  if (product) {
    return {
      title: `${product.title} - Alma Le`,
      description: product.descriptionMeta,
      keywords: product.keywords,
    };
  }
  return {
    title: "Product Not Found - Alma Le",
    description: "The product you are looking for could not be found.",
    keywords: "product, Alma Le, not found",
  };
}

export async function fetchProducts(lang) {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/lib/api/product`);
    url.searchParams.append("lang", lang); // Добавляем параметр lang
    const res = await fetch(url.toString());
    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_SITE_URL}/lib/api/product`,
    //   {
    //     params: { lang: lang },
    //   }
    // ); // Замените на URL вашего API
    if (!res.ok) throw new Error("Ошибка при загрузке товаров");
    const products = await res.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Возвращаем пустой массив, если произошла ошибка
  }
}

export async function generateStaticParams() {
  // Укажите возможные значения для [lang] и [id]
  const langs = ["en", "ru", "kz"]; // Например, поддерживаемые языки
  const params = [];

  for (const lang of langs) {
    const products = await fetchProducts(lang); // Получаем продукты для текущего языка

    if (products.length === 0) {
      console.warn(`No products found for language: ${lang}`);
      continue; // Пропускаем, если для языка нет продуктов
    }

    // Преобразуем список продуктов в массив id
    const productIds = products.map((elem) => elem._id);

    // Для каждого продукта создаем параметр для генерации статичных страниц
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
