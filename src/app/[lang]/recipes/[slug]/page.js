import { notFound } from "next/navigation";
import { RecipeArticle } from "../../../components/RecipePages";
import { getRecipe, pick, recipes } from "../../../lib/recipes";
import { languageAlternates, locales } from "../../../lib/locales";

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) return {};
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.alma-le.com";
  const title = pick(recipe.title, lang);
  const description = pick(recipe.lead, lang);
  return {
    title: `${title} — Alma Le`,
    description,
    alternates: {
      languages: languageAlternates(base, `/recipes/${slug}`),
    },
    openGraph: {
      title,
      description,
      url: `${base}/${lang}/recipes/${slug}`,
      images: [recipe.image],
      type: "article",
    },
  };
}

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    recipes.map((recipe) => ({ lang, slug: recipe.slug }))
  );
}

export default async function Page({ params }) {
  const { lang, slug } = await params;
  if (!getRecipe(slug)) notFound();
  return <RecipeArticle lang={lang} slug={slug} />;
}
