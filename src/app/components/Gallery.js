"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const images = [
  { src: "/img/gallery/1.JPEG", altName: "Лудший подарок маме" },
  { src: "/img/gallery/2.JPEG", altName: "Подарок жене" },
  { src: "/img/set/1.png", altName: "Подарочный набор" },
  { src: "/img/gallery/3.JPEG", altName: "Подарок любимому человеку" },
  { src: "/img/gallery/4.JPEG", altName: "Подарок на свадьбу" },
  // { src: "/img/gallery/5.JPEG", altName: "Подарок невесте" },
  { src: "/img/gallery/6.JPEG", altName: "Подарок на той" },
  { src: "/img/gallery/7.JPEG", altName: "Медная посуда" },
  { src: "/img/gallery/8.JPEG", altName: "Набор медной посуды" },
  { src: "/img/gallery/9.JPEG", altName: "Лудщий подарок" },
  { src: "/img/gallery/10.JPEG", altName: "Здоровье семьи" },
  { src: "/img/gallery/11.JPEG", altName: "Медная сковорода" },
  { src: "/img/4-блок_Миссия.jpg", altName: "Медная сковорода" },
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
            src={src.src}
            alt={`${src.altName === "" ? t.gallery.altInfo : src.altName}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
