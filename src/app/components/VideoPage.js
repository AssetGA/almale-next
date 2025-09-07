import { fetchVideo } from "../actions/video.js";
import { notFound } from "next/navigation";
import { images } from "../utils/api.js";
import VideoSeo from "../components/VideoSeo.js";

export default async function VideoPage({ id, lang, pathname }) {
  const videos = await fetchVideo(lang);
  const video = videos.find((v) => v._id === id);

  if (!video) return notFound();

  const currentIndex = videos.findIndex((v) => v._id === id);
  const image = images[currentIndex];
  console.log("video", image.src);
  return (
    <>
      <VideoSeo video={video} image={image?.src} pathname={pathname} />
      <main className="relative w-full min-h-screen bg-black text-white">
        {/* Видео на весь экран */}
        <div className="relative w-full h-screen">
          {video?.videoUrl?.startsWith("/") ? (
            <video
              className="w-full h-full object-contain bg-black"
              controls
              preload="metadata"
              poster={image?.src || "/img/gallery/1.JPEG"}
              autoPlay
            >
              <source src={video.videoUrl} type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          ) : (
            <iframe
              src={video?.videoUrl}
              title={video?.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          )}

          {/* Кнопки навигации поверх видео */}
          <div className="absolute inset-0 flex justify-between items-center px-6 pointer-events-none">
            <a
              className={`pointer-events-auto px-4 py-3 bg-black/50 rounded hover:bg-black/70 transition-colors ${
                currentIndex <= 0 ? "pointer-events-none opacity-50" : ""
              }`}
              href={
                currentIndex > 0
                  ? `/gallery/${videos[currentIndex - 1]._id}`
                  : "#"
              }
            >
              ←
            </a>
            <a
              className={`pointer-events-auto px-4 py-3 bg-black/50 rounded hover:bg-black/70 transition-colors ${
                currentIndex >= videos.length - 1
                  ? "pointer-events-none opacity-50"
                  : ""
              }`}
              href={
                currentIndex < videos.length - 1
                  ? `/gallery/${videos[currentIndex + 1]._id}`
                  : "#"
              }
            >
              →
            </a>
          </div>
        </div>

        {/* Заголовок и описание под видео */}
        <div className="p-6 max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            {video?.title}
          </h1>
          {video?.description && (
            <p className="text-lg text-gray-300">{video.description}</p>
          )}
        </div>
      </main>
    </>
  );
}
