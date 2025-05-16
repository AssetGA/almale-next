import React from "react";
import Values from "./Values.js";
import History from "./History.js";
import Mission from "./Mission.js";
import Advantages from "./Advantages.js";
import ConnectionForm from "./ConnectionForm.jsx";
import Production from "./Production.js";
import { getDictionary } from "../[lang]/dictionaries.js";
import Opinion from "./Opinion.jsx";
import VideoSection from "./VideoSection.js";
import Letters from "./Letters.js";
import Header from "./Header.js";
import Head from "next/head.js";
import Carousel from "./Carousel.jsx";
import AutoPlayVideo from "./AutoPlayVideo.js";

const Main = async ({ lang }) => {
  const t = await getDictionary(lang);
  const b = false;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Медный набор посуды Alma Le",
    description: "Профессиональная медная посуда для кухни.",
    image: [
      "https://www.alma-le.com/img/set/0.png",
      "https://www.alma-le.com/img/set/1.png",
      "https://www.alma-le.com/img/set/2.png",
    ],
    brand: {
      "@type": "Brand",
      name: "Alma Le",
    },
    offers: {
      "@type": "Offer",
      price: "790",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `https://www.alma-le.com/${lang}/product`,
    },
  };
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Header lang={lang} t={t} />
      <Values lang={lang} />
      <History lang={lang} />
      <Mission lang={lang} />
      <Production lang={lang} />
      <Advantages lang={lang} />
      {b ? <Opinion lang={lang} t={t} /> : ""}
      <VideoSection lang={lang} />
      <Carousel />
      <ConnectionForm lang={lang} t={t} /> <Letters />
    </>
  );
};

export default Main;
