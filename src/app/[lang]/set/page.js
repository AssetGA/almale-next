import AdLanding from "../../components/AdLanding";
import { getLanding } from "../../components/adCopy";
import { canonicalUrl, pageAlternates } from "../../lib/locales";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const page = getLanding(lang, "set");
  return {
    title: page.title,
    description: page.description,
    alternates: pageAlternates(lang, "/set"),
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonicalUrl(lang, "/set"),
      type: "website",
    },
  };
}

export default async function Page({ params }) {
  const { lang } = await params;
  return <AdLanding lang={lang} page={getLanding(lang, "set")} />;
}
