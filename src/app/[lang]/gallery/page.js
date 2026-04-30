import React from "react";
import Gallery from "../../components/Gallery";
import { getDictionary } from "../dictionaries";

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
