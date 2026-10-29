import UtensilsSet from "../../components/UtensilsSet";
import { getDictionary } from "../dictionaries";
import {
  getLocalizedProductInfo,
  getLocalizedProducts,
} from "../../lib/catalog";
import { canonicalUrl, localeParams, pageAlternates, siteOrigin } from "../../lib/locales";

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

  const baseUrl = siteOrigin();
  return {
      title: `${t.metadataProduct.title} - Alma Le`,
      description: t.metadataProduct.description,
      alternates: pageAlternates(lang, "/product"),
      keywords: t.metadataProduct.keywords,
      openGraph: {
        title: `${t.metadata.title}`,
        description: `${t.metadata.description}`,
        images: [
          `${baseUrl}/img/set/1.png`,
          `${baseUrl}/img/set/0.png`,
          `${baseUrl}/img/set/2.png`,
          `${baseUrl}/img/set/3.png`,
        ],
        url: canonicalUrl(lang, "/product"),
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
