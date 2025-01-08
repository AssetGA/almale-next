import React from "react";
import Head from "./Head.js";
import Values from "./Values.js";
import History from "./History.js";
import Mission from "./Mission.js";
import Advantages from "./Advantages.js";
import ConnectionForm from "./ConnectionForm.jsx";
import Production from "./Production.js";
import { getDictionary } from "../[lang]/dictionaries.js";
// import Opinion from "./Opinion.jsx";

const Main = async ({ lang }) => {
  const t = await getDictionary(lang);
  return (
    <>
      <Head lang={lang} />
      <Values lang={lang} />
      <History lang={lang} />
      <Mission lang={lang} />
      <Production lang={lang} />
      <Advantages lang={lang} />
      {/* <Opinion lang={lang} t={t} /> */}
      <ConnectionForm lang={lang} t={t} />
    </>
  );
};

export default Main;
