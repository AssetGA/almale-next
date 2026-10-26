import AdLanding from "../../components/AdLanding";
import { getLanding } from "../../components/adCopy";
import { languageAlternates } from "../../lib/locales";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const page = getLanding(lang, "recipes");
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.alma-le.com";
  return {
    title: page.title,
    description: page.description,
    alternates: {
      languages: languageAlternates(base, "/recipes"),
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${base}/${lang}/recipes`,
      type: "website",
    },
  };
}

export default async function Page({ params }) {
  const { lang } = await params;
  return <AdLanding lang={lang} page={getLanding(lang, "recipes")} />;
}
