"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const images = [
  "/img/gallery/1.JPEG",
  "/img/gallery/2.JPEG",
  "/img/gallery/3.JPEG",
  "/img/gallery/4.JPEG",
  "/img/gallery/5.JPEG",
  "/img/gallery/6.JPEG",
  "/img/gallery/7.JPEG",
  "/img/gallery/8.JPEG",
  "/img/gallery/9.JPEG",
  "/img/gallery/10.JPEG",
  "/img/gallery/11.JPEG",
];

const Gallery = ({ t }) => {
  const imageRefs = useRef([]);

  useEffect(() => {
    if (!imageRefs.current) return;

    gsap.fromTo(
      imageRefs.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {images.map((src, idx) => (
        <div
          key={idx}
          ref={(el) => {
            if (el) imageRefs.current[idx] = el;
          }}
          className="relative w-full h-64 overflow-hidden rounded-xl shadow-md"
        >
          <Image
            src={src}
            alt={`${t.gallery.altInfo}`}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
