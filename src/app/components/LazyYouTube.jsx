"use client";

import Image from "next/image";

const LazyYouTube = ({ video }) => {
  return (
    <div className="relative w-full h-56 cursor-pointer">
      <a href={`${video.url}`} target="_blank" rel="noopener noreferrer">
        <Image
          src={video.img}
          alt="Alma`le set"
          width={800}
          height={600}
          className="w-full h-full"
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default LazyYouTube;
