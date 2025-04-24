"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const SlidingText = ({ text, elemClass }) => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { x: "-100%", opacity: 0 },
      {
        x: "100%",
        opacity: 1,
        duration: 5,
        ease: "linear",
        repeat: -1,
      }
    );
  }, []);

  return (
    <h1
      ref={textRef}
      className={`whitespace-nowrap font-bold text-black ${elemClass}`}
      style={{ fontFamily: "Montserrat-Bold" }}
    >
      {text}
    </h1>
  );
};

export default SlidingText;
