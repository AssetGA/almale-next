"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const CircleMotion = () => {
  const circleRef = useRef < HTMLDivElement > null;

  useEffect(() => {
    gsap.to(circleRef.current, {
      duration: 4,
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
        autoRotate: false,
      },
    });
  }, []);

  return (
    <div className="relative w-[300px] h-[300px] mx-auto mt-20 bg-gray-100 rounded-full">
      <div
        ref={circleRef}
        className="w-10 h-10 bg-green-500 rounded-full absolute top-[100px] left-[100px]"
      />
    </div>
  );
};

export default CircleMotion;
