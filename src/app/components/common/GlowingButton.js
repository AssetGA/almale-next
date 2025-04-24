"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GlowingButton({ text, elemClass }) {
  const borderRef = useRef(null);

  useEffect(() => {
    gsap.to(borderRef.current, {
      backgroundPosition: "200% center",
      duration: 5,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div className="relative p-1 rounded-md" ref={borderRef}>
      {/* Обводка */}

      {/* Кнопка */}
      <button
        className={`relative ${elemClass} z-10 bg-green-light text-white rounded-md text-lg font-semibold animate-border `}
      >
        {text}
      </button>

      {/* Стили для анимации градиента */}
      <style jsx>{`
        .animate-border {
          background: linear-gradient(
            270deg,
            #ff00cc,
            #3333ff,
            #00ffee,
            #ffcc00,
            #ff00cc
          );
          background-size: 400% 400%;
          animation: gradientShift 6s ease infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
