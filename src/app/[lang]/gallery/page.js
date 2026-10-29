import React from "react";
import Gallery from "../../components/Gallery";
import { getDictionary } from "../dictionaries";
import { canonicalUrl, pageAlternates } from "../../lib/locales";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const title = `${t.video.title} — Alma Le`;
  return {
    title,
    description: t.metadata.description,
    alternates: pageAlternates(lang, "/gallery"),
    openGraph: {
      title,
      description: t.metadata.description,
      url: canonicalUrl(lang, "/gallery"),
      type: "website",
    },
  };
}

async function page({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return (
    <div className="relative my-48 p-1">
      {/* <VideoBook lang={lang} /> */}
      <Gallery t={t} lang={lang} />
    </div>
  );
}

page.propTypes = {};

export default page;
