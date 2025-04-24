"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const ButtonLink = () => {
  const container = useRef(null);

  const { contextSafe } = useGSAP({ scope: container }); // ограничиваем область действия

  // Контекстно-безопасная анимация
  const onClickGood = contextSafe(() => {
    gsap.to(".box", { x: 200 }); // теперь найдёт .box внутри container
    gsap.to(".box", { y: 200 }); // теперь найдёт .box внутри container
  });

  return (
    <div ref={container}>
      <button
        onClick={onClickGood}
        className="box py-2 px-4 rounded-md hover:bg-black hover:text-white bg-gray-200 transition"
      >
        Поверни меня
      </button>
    </div>
  );
};

export default ButtonLink;
