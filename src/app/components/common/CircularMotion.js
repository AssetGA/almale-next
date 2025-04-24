"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Регистрация плагина
gsap.registerPlugin(MotionPathPlugin);

const CircularMotion = () => {
  const elementRef = useRef < HTMLDivElement > null;

  useEffect(() => {
    gsap.to(elementRef.current, {
      duration: 5,
      repeat: -1,
      ease: "none",
      motionPath: {
        path: [
          { x: 100, y: 0 },
          { x: 200, y: 100 },
          { x: 100, y: 200 },
          { x: 0, y: 100 },
          { x: 100, y: 0 },
        ],
        curviness: 1,
        autoRotate: false,
      },
    });
  }, []);

  return (
    <div className="relative w-[300px] h-[300px] mx-auto mt-20 bg-gray-200 rounded-full">
      <div
        ref={elementRef}
        className="w-8 h-8 bg-green-600 rounded-full absolute top-[100px] left-[100px]"
      />
    </div>
  );
};

export default CircularMotion;
