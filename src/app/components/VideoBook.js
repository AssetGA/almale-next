"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const videos = ["/video/1.mp4", "/video/2.mp4", "/video/3.mp4"];

export default function VideoBook() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={containerRef}
      className="relative h-[150vh] bg-white flex items-center justify-center"
    >
      <div className="sticky top-1/2 -translate-y-1/2 w-[600px] h-[400px] perspective-1000">
        {videos.map((src, i) => {
          const rotateY = useTransform(
            scrollYProgress,
            [0, 1],
            [`0deg`, `${-90 * i}deg`]
          );

          return (
            <motion.div
              key={i}
              style={{
                rotateY,
              }}
              className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden shadow-xl bg-black preserve-3d will-change-transform"
            >
              <video
                src={src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
