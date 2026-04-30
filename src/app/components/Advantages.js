import Image from "next/image";
import React from "react";
import { getDictionary } from "../[lang]/dictionaries";
import SlowTextReveal from "./SlowTextReveal";

const Advantages = async ({ lang }) => {
  const t = await getDictionary(lang);
  return (
    <div id="adventages" className="w-full">
      <div className="flex flex-col py-20 md:px-5">
        <h2
          className="text-center font-bold text-2xl"
          style={{ fontFamily: "Montserrat-Bold" }}
        >
          {t.advantages.head}
        </h2>
        <div className="grid grid-rows-3 sm:grid-rows-none sm:grid-cols-3 gap-5 md:gap-20 w-auto xl:px-40 py-20 px-5 sm:px-0">
          <div className="flex flex-col items-center ">
            <Image
              src={"img/object1.svg"}
              className="w-[100px] h-[100px] lg:w-[175px] lg:h-[175px]"
              width={100}
              height={100}
              alt="моменты жизни на кухне"
            />
            <div className="text-center pt-5">
              <SlowTextReveal text={t.advantages.one}></SlowTextReveal>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <Image
              src={"img/object2.svg"}
              className="w-[100px] h-[100px] lg:w-[175px] lg:h-[175px]"
              width={100}
              height={100}
              alt="моменты жизни на кухне"
            />
            <div className="text-center pt-5">
              <SlowTextReveal text={t.advantages.two}></SlowTextReveal>
            </div>
          </div>

          <div className="flex flex-col items-center ">
            <Image
              src={"img/object3.svg"}
              className="w-[100px] h-[100px] lg:w-[175px] lg:h-[175px]"
              width={100}
              height={100}
              alt="моменты жизни на кухне"
            />
            <div className="text-center pt-5">
              <SlowTextReveal text={t.advantages.three}></SlowTextReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
    // fvmfdv
  );
};

export default Advantages;
