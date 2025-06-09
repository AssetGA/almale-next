import React from "react";

const VideoGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {images.map((src, idx) => (
        <div
          key={idx}
          ref={(el) => {
            if (el) imageRefs.current[idx] = el;
          }}
          className="relative w-full h-64 overflow-hidden rounded-xl shadow-md"
        ></div>
      ))}
    </div>
  );
};

export default VideoGallery;
