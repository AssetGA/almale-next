import UtensilsSet from "../../components/UtensilsSet";
import { getDictionary } from "../dictionaries";
import {
  getLocalizedProductInfo,
  getLocalizedProducts,
} from "../../lib/catalog";
import { languageAlternates, localeParams } from "../../lib/locales";

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
  const { lang } = await params;
  const t = await getDictionary(lang);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  return {
      title: `${t.metadataProduct.title} - Alma Le`,
      description: t.metadataProduct.description,
      alternates: {
        languages: languageAlternates(baseUrl, "/product"),
      },
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

export async function generateStaticParams() {
  return localeParams;
}

export default async function Page({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const [products, info] = await Promise.all([
    getLocalizedProducts(lang),
    getLocalizedProductInfo(lang),
  ]);

  return (
    <div className="mt-32 px-5">
      <h1
        className="text-center text-2xl font-bold"
        style={{ fontFamily: "Montserrat-Bold" }}
      >
        {t.metadataProduct.title}
      </h1>
      <p className="mx-auto max-w-3xl py-4 text-center text-sm">
        {t.metadataProduct.description}
      </p>
      <UtensilsSet
        lang={lang}
        t={t}
        initialProducts={products}
        initialInfo={info}
      />
    </div>
  );
}
