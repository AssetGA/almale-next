"use client";

const LazyYouTube = ({ video }) => {
  return (
    <div className="relative w-full h-56 cursor-pointer">
      <a href={`${video.url}`} target="_blank" rel="noopener noreferrer">
        <img src={video.img} alt="Alma`le set" className="w-full h-full " />
      </a>
    </div>
  );
};

export default LazyYouTube;
