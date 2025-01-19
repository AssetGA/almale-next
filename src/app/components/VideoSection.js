"ues client";

import React from "react";

import { getDictionary } from "../[lang]/dictionaries";
import { convertToEmbedUrl } from "../utils/embed";

const VideoSection = async ({ lang }) => {
  const t = await getDictionary(lang);

  const videos = [
    {
      id: "video1",
      title: "Exploring the Mountains",
      url: "https://www.youtube.com/watch?v=AAHCllXUXrI&t=5s",
    },
    {
      id: "video2",
      title: "Ocean Adventures",
      url: "https://www.youtube.com/watch?v=nFNJUepGYHY",
    },
    {
      id: "video3",
      title: "City Life Vibes",
      url: "https://www.youtube.com/watch?v=5W05UwE_LQ0&t=6s",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-100 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          className="text-2xl font-extrabold text-center text-gray-800 mb-10"
          style={{ fontFamily: "Montserrat-Bold" }}
        >
          {t.video.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <iframe
                className="w-full h-56 group-hover:opacity-90 transition-opacity duration-300"
                src={convertToEmbedUrl(video.url)}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                sandbox="allow-same-origin allow-scripts allow-presentation"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
