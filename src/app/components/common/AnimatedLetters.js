"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedLetters({ text, elemClass }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const letters = containerRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <h1
      ref={containerRef}
      className={`${elemClass}`}
      style={{ fontFamily: "Montserrat-Bold" }}
    >
      {text.split("").map((char, i) => (
        <span key={i} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}
