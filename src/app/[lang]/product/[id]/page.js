import { notFound, redirect } from "next/navigation";
import { fetchProducts } from "../../../actions/products";
import ProductAbout from "../../../components/ProductAbout";
import { getDictionary } from "../../dictionaries";
import { isCookwareSet } from "../../../lib/catalog";
import { canonicalUrl, locales, pageAlternates, siteOrigin } from "../../../lib/locales";

// export async function getServerSideProps({ req }) {
//   // Извлекаем язык из URL
//   const { pathname } = req;
//   const langMatch = pathname.match(/^\/(kz|en|ru)(\/|$)/);
//   const lang = langMatch ? langMatch[1] : "kz"; // Если язык найден, берем его, иначе — 'kz'

//   // Возвращаем данные как props для компонента
//   return {
//     props: {
//       lang,
//     },
//   };
// }

export async function generateMetadata({ params }) {
  const { id, lang } = await params;

  const products = await fetchProducts(lang);
  const product = products.find((elem) => String(elem._id) === String(id));
  if (!product) {
    return {
      title: "Alma Le",
      robots: { index: false, follow: false },
    };
  }
  if (isCookwareSet(product)) {
    return {
      robots: { index: false, follow: true },
      alternates: pageAlternates(lang, "/product"),
    };
  }
  return {
    title: `${product.title}`,
    description: product.descriptionMeta,
    alternates: pageAlternates(lang, `/product/${id}`),
    keywords: product.keywords,
    openGraph: {
      title: `${product.title}`,
      description: `${product.descriptionMeta}`,
      images: [`${siteOrigin()}${product.imageUrl}`],
      url: canonicalUrl(lang, `/product/${id}`),
    },
  };
}

export async function generateStaticParams() {
  // Укажите возможные значения для [lang] и [id]
  const langs = locales;
  const params = [];

  for (const lang of langs) {
    const products = await fetchProducts(lang); // Получаем продукты для текущего языка

    if (products.length === 0) {
      console.warn(`No products found for language: ${lang}`);
      continue; // Пропускаем, если для языка нет продуктов
    }

    // Преобразуем список продуктов в массив id
    const productIds = products
      .filter((elem) => !isCookwareSet(elem))
      .map((elem) => elem._id);

    productIds.forEach((id) => {
      params.push({ lang, id });
    });
  }

  return params; // Возвращаем параметры для генерации статичных страниц
}

export default async function Page({ params }) {
  const { lang, id } = await params;
  const products = await fetchProducts(lang);
  const product = products.find((elem) => String(elem._id) === String(id));
  if (product && isCookwareSet(product)) redirect(`/${lang}/product`);
  if (products.length && !product) notFound();
  const t = await getDictionary(lang);
  return <ProductAbout lang={lang} t={t} />;
}
