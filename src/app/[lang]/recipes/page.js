import { RecipeIndex } from "../../components/RecipePages";
import { recipeUi } from "../../lib/recipes";
import { languageAlternates } from "../../lib/locales";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const page = recipeUi[lang] || recipeUi.ru;
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.alma-le.com";
  return {
    title: page.title,
    description: page.lead,
    alternates: {
      languages: languageAlternates(base, "/recipes"),
    },
    openGraph: {
      title: page.title,
      description: page.lead,
      url: `${base}/${lang}/recipes`,
      type: "website",
    },
  };
}

export default async function Page({ params }) {
  const { lang } = await params;
  return <RecipeIndex lang={lang} />;
}
