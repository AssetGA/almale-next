import ProductAbout from "../../../components/ProductAbout";
import { listProductId } from "../../../utils/listSrc";
import { getDictionary } from "../../dictionaries";

export async function generateStaticParams() {
  // Укажите возможные значения для [lang] и [id]
  const langs = ["en", "ru", "kz"]; // Например, поддерживаемые языки
  const products = ["1", "2", "3"]; // Например, ID товаров

  const params = [];
  langs.forEach((lang) => {
    products.forEach((id) => {
      params.push({ lang, id });
    });
  });

  return params;
}

export async function generateMetadata({ params: { lang, id } }) {
  const t = await getDictionary(lang);
  console.log("t", t);
  const product = listProductId.find((elem) => {
    return elem.id === id;
  });

  return {
    title: product.title,
    description: product.description,
    keywords: product.keywords,
  };
}

export default async function Page({ params: { lang } }) {
  const t = await getDictionary(lang);
  return <ProductAbout lang={lang} t={t} />;
}
