import React from "react";
import Gallery from "../../components/Gallery";
import { getDictionary } from "../dictionaries";
import VideoBook from "../../components/VideoBook";

async function page({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return (
    <div className="mb-48">
      <VideoBook lang={lang} />
      <Gallery t={t} />
    </div>
  );
}

page.propTypes = {};

export default page;
