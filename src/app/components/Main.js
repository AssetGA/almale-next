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
import Header from "./Header.js";
import Carousel from "./Carousel.jsx";

const Main = async ({ lang }) => {
  const t = await getDictionary(lang);
  const b = false;
  return (
    <>
      <Header lang={lang} t={t} />
      <Values lang={lang} />
      <History lang={lang} />
      <Mission lang={lang} />
      <Production lang={lang} />
      <Advantages lang={lang} />
      {b ? <Opinion lang={lang} t={t} /> : ""}
      <VideoSection lang={lang} />
      <Carousel />
      <ConnectionForm lang={lang} t={t} />
      {/* <Letters /> */}
    </>
  );
};

export default Main;
