"use client";

import { useState, useEffect } from "react";
import { convertToEmbedUrl } from "../utils/embed";

const LazyYouTube = ({ video }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Загружает YouTube только после полной загрузки страницы

    const onLoad = () => setIsLoaded(true);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <div
      className="relative w-full h-56 cursor-pointer"
      onClick={() => setIsLoaded(true)}
    >
      {isLoaded ? (
        <iframe
          title="about Alma`le brand"
          className="w-full h-56 group-hover:opacity-90 transition-opacity duration-300"
          src={convertToEmbedUrl(video.url).replace(
            "www.youtube.com",
            "www.youtube-nocookie.com"
          )}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          sandbox="allow-same-origin allow-scripts allow-presentation"
          allowFullScreen
          loading="lazy" // Lazy load the iframe
        ></iframe>
      ) : (
        <img
          src={`/img/production-desc.png`}
          alt="Alma`le set"
          className="w-full h-full "
        />
      )}
    </div>
  );
};

export default LazyYouTube;
