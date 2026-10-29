import { RecipeIndex } from "../../components/RecipePages";
import { recipeUi } from "../../lib/recipes";
import { canonicalUrl, pageAlternates } from "../../lib/locales";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const page = recipeUi[lang] || recipeUi.ru;
  return {
    title: page.title,
    description: page.lead,
    alternates: pageAlternates(lang, "/recipes"),
    openGraph: {
      title: page.title,
      description: page.lead,
      url: canonicalUrl(lang, "/recipes"),
      type: "website",
    },
  };
}

export default async function Page({ params }) {
  const { lang } = await params;
  return <RecipeIndex lang={lang} />;
}
