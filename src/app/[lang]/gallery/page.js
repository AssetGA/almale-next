import React from "react";
import Gallery from "../../components/Gallery";
import { getDictionary } from "../dictionaries";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "kz" }, { lang: "ru" }];
}

async function page({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return (
    <div className="my-48">
      <Gallery t={t} />
    </div>
  );
}

page.propTypes = {};

export default page;
