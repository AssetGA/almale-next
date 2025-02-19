import { fetchProducts } from "../../actions/products";
import UtensilsSet from "../../components/UtensilsSet";
import { getDictionary } from "../dictionaries";

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
  const { lang } = await params;
  const t = await getDictionary(lang);
  const products = await fetchProducts(lang);
  const productSet = products.find((elem) => {
    return elem.price === 395000;
  });
  if (productSet) {
    return {
      title: `${t.metadataProduct.title} - Alma Le`,
      description: t.metadataProduct.description,
      keywords: t.metadataProduct.keywords,
      openGraph: {
        title: `${t.metadata.title}`,
        description: `${t.metadata.description}`,
        images: [
          "https://alma-le.com/img/set/1.png",
          "https://alma-le.com/img/set/0.png",
          "https://alma-le.com/img/set/2.png",
          "https://alma-le.com/img/set/3.png",
        ], // ✅ Supports array
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/product`,
      },
    };
  }
}

export default async function Page({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return <UtensilsSet lang={lang} t={t} />;
}
