import React from "react";
import { getDictionary } from "../[lang]/dictionaries";

const Mission = async ({ lang }) => {
  const t = await getDictionary(lang);
  return (
    <div className="relative w-full my-20 hover:opacity-95">
      <picture className="pointer-events-none absolute inset-0">
        <source media="(min-width: 640px)" srcSet="/img/mission.webp" />
        <img
          src="/img/mission-mob.webp"
          alt=""
          loading="lazy"
          decoding="async"
            className="h-full w-full object-cover sm:object-contain rtl:-scale-x-100"
        />
      </picture>
      <div className="relative xl:py-40 xl:px-40 lg:py-28 lg:ps-20 py-10 px-10 text-white text-sm lg:text-lg">
        <div className="sm:w-[400px] pb-40 sm:pb-0 sm:mb-12 ">
          <h1
            className="text-xl font-bold hover:text-gray-header"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            {t.mission.head}
          </h1>
          <p className="py-5 text-sm">{t.mission.one}</p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
