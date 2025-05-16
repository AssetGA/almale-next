"use client";

import React from "react";

const AutoPlayVideo = () => {
  return (
    <div className="w-full aspect-video max-w-4xl mx-auto my-10 rounded-xl overflow-hidden shadow-lg">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/watch?v=AAHCllXUXrI&t=5s"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default AutoPlayVideo;
