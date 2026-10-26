"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  "/img/carousel/set-0.webp",
  "/img/carousel/set-1.webp",
  "/img/carousel/set-2.webp",
  "/img/carousel/set-3.webp",
  "/img/carousel/set-4.webp",
  "/img/carousel/fryingpan-01.webp",
  "/img/carousel/fryingpan-1.webp",
  "/img/carousel/fryingpan-2.webp",
  "/img/carousel/fryingpan-3.webp",
  "/img/carousel/fryingpan-4.webp",
  "/img/carousel/pan6-0.webp",
  "/img/carousel/pan6-1.webp",
  "/img/carousel/pan6-2.webp",
  "/img/carousel/pan6-3.webp",
  "/img/carousel/pan6-4.webp",
  "/img/carousel/sousepan-01.webp",
  "/img/carousel/sousepan-1.webp",
  "/img/carousel/sousepan-2.webp",
  "/img/carousel/sousepan-3.webp",
  "/img/carousel/sousepan-4.webp",
];

export default function Carousel() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const strip = visible ? [...images, ...images] : [];

  return (
    <div
      ref={containerRef}
      className="relative my-32 h-[200px] w-full overflow-hidden"
    >
      {visible && (
        <div className="carousel-track flex w-max">
          {strip.map((src, index) => (
            <img
              key={`${src}-${index}`}
              src={src}
              alt=""
              width={300}
              height={200}
              loading="lazy"
              decoding="async"
              className="mx-4 h-[200px] w-[300px] flex-shrink-0 rounded-xl object-cover shadow-lg"
            />
          ))}
        </div>
      )}
    </div>
  );
}
