import { fetchVideo } from "../actions/video.js";
import { notFound } from "next/navigation";

import VideoSeo from "./VideoSeo.js";
import { images } from "../utils/api.js";

export default async function VideoPage({ id, lang }) {
  const videos = await fetchVideo(lang);
  const video = videos.find((v) => v._id === id);

  if (!video) return notFound();

  const currentIndex = videos.findIndex((v) => v._id === id);
  const image = images[currentIndex];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-black/30 text-white">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
        {video?.title}
      </h1>

      <nav className="flex justify-between w-full max-w-5xl mb-6">
        <a
          className={`px-4 py-3 bg-gray-800 rounded hover:bg-gray-700 transition-colors disabled:opacity-50 ${
            currentIndex <= 1 ? "pointer-events-none opacity-50" : ""
          }`}
          href={
            currentIndex > 0 ? `/gallery/${videos[currentIndex - 1]._id}` : "#"
          }
        >
          ← Предыдущее
        </a>
        <a
          className={`px-4 py-3 bg-gray-800 rounded hover:bg-gray-700 transition-colors disabled:opacity-50  ${
            currentIndex >= videos.length - 2
              ? "pointer-events-none opacity-50"
              : ""
          }`}
          href={
            currentIndex < videos.length - 1
              ? `/gallery/${videos[currentIndex + 1]._id}`
              : "#"
          }
        >
          Следующее →
        </a>
      </nav>

      <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
        {video?.videoUrl?.startsWith("/") ? (
          <video
            className="w-full h-full object-contain"
            controls
            preload="metadata"
            poster={image?.src || "/img/gallery/1.JPEG"}
          >
            <source src={video.videoUrl} type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        ) : (
          <div className="responsive-iframe-container h-full">
            <iframe
              src={video?.videoUrl}
              title={video?.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="eager"
              className="w-full h-full"
            />
          </div>
        )}
      </div>

      {video?.description && (
        <article className="mt-8 text-lg text-gray-300 text-center max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">Описание</h2>
          <p>{video.description}</p>
        </article>
      )}
      <VideoSeo video={video} image={image?.src} />
    </div>
  );
}
