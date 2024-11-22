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
  const t = await getDictionary(params.lang);

  return {
    title: `${t.metadataProduct.title} - Alma Le`,
    description: t.metadataProduct.description,
    keywords: t.metadataProduct.keywords,
  };
}

export default async function Page({ params: { lang } }) {
  const t = await getDictionary(lang);
  return <UtensilsSet lang={lang} t={t} />;
}
