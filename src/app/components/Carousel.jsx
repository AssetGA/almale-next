"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const images = [
  "/img/set/0.png",
  "/img/set/1.png",
  "/img/set/2.png",
  "/img/set/3.png",
  "/img/set/4.png",
  "/img/fryingpan/01.png",
  "/img/fryingpan/1.png",
  "/img/fryingpan/2.png",
  "/img/fryingpan/3.png",
  "/img/fryingpan/4.png",
  "/img/pan6/0.png",
  "/img/pan6/1.png",
  "/img/pan6/2.png",
  "/img/pan6/3.png",
  "/img/pan6/4.png",
  "/img/sousepan/01.png",
  "/img/sousepan/1.png",
  "/img/sousepan/2.png",
  "/img/sousepan/3.png",
  "/img/sousepan/4.png",
];

function horizontalLoop(elements, options = {}) {
  const config = {
    repeat: -1,
    speed: 1,
    padding: 0,
    ...options,
  };

  const tl = gsap.timeline({ repeat: config.repeat });
  const totalWidth = elements.reduce(
    (acc, el) => acc + el.offsetWidth + config.padding,
    0
  );

  elements.forEach((el) => {
    tl.to(
      el,
      {
        x: `-=${totalWidth}`,
        duration: totalWidth / config.speed,
        ease: "none",
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % -totalWidth),
        },
      },
      0
    );
  });

  return tl;
}

export default function Carousel() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const imageElements = Array.from(
      containerRef.current.querySelectorAll(".carousel-item")
    );

    horizontalLoop(imageElements, { speed: 100 });
  }, []);

  return (
    <div className="overflow-hidden w-full relative my-32">
      <div ref={containerRef} className="flex whitespace-nowrap">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="carousel-item flex-shrink-0 mx-4"
            style={{
              width: "300px",
              height: "200px",
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
