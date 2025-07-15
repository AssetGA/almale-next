"use client";

import React, { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useParams, useRouter } from "next/navigation";
import { getVideoById } from "../store/videoSlice";
import Script from "next/script";
import { images } from "./Gallery";
import Head from "next/head";

export default function VideoPage() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const videoId = params?.id;
  const videos = useAppSelector((state) => state.video.entity);
  const loading = useAppSelector((state) => state.video.isLoading);

  const currentIndex = useMemo(() => {
    return videos.findIndex((v) => v._id === videoId);
  }, [videos, videoId]);

  const video = videos?.[currentIndex];
  const image = images?.[currentIndex];

  // Генерация мета-тегов
  const metaTitle = video
    ? `${video.title} | ALMA`
    : "ALMA - Официальные видео";
  const metaDescription = video?.description || "Официальные видео группы ALMA";

  useEffect(() => {
    if (videos?.length && !video) {
      dispatch(getVideoById(currentIndex));
    }
  }, [dispatch, currentIndex, videos, video]);

  const goToVideo = (newIndex) => {
    if (newIndex >= 0 && newIndex < videos.length) {
      router.push(`/gallery/${videos[newIndex]._id}`);
    }
  };

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="video.other" />
        {video && (
          <>
            <meta property="og:video" content={video.videoUrl} />
            <meta property="og:video:type" content="text/html" />
            <meta property="og:video:width" content="1280" />
            <meta property="og:video:height" content="720" />
            <meta
              property="og:image"
              content={`${process.env.NEXT_PUBLIC_SITE_URL}${
                image?.src || "/img/gallery/default.jpg"
              }`}
            />

            <Script
              id="video-jsonld"
              type="application/ld+json"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "VideoObject",
                  name: video.title,
                  description: video.description,
                  thumbnailUrl: `${process.env.NEXT_PUBLIC_SITE_URL}${image?.src}`,
                  uploadDate: video.createdAt || new Date().toISOString(),
                  contentUrl: video.videoUrl,
                  duration: "PT3M42S", // Замените на реальную длительность
                  embedUrl: video.videoUrl,
                  interactionStatistic: {
                    "@type": "InteractionCounter",
                    interactionType: "https://schema.org/WatchAction",
                    userInteractionCount: video.views || 0,
                  },
                }),
              }}
            />
          </>
        )}
      </Head>

      <main className="relative flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-black/30 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          {video?.title || "Загрузка..."}
        </h1>

        <nav className="grid grid-cols-2 gap-2 w-full max-w-5xl mb-6">
          <button
            className="px-4 py-3 bg-gray-800 rounded hover:bg-gray-700 transition-colors"
            disabled={currentIndex === 0}
            onClick={() => goToVideo(currentIndex - 1)}
            aria-label="Предыдущее видео"
          >
            ← Предыдущее
          </button>
          <button
            className="px-4 py-3 bg-gray-800 rounded hover:bg-gray-700 transition-colors"
            disabled={currentIndex === videos.length - 1}
            onClick={() => goToVideo(currentIndex + 1)}
            aria-label="Следующее видео"
          >
            Следующее →
          </button>
        </nav>

        <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
          {loading ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="animate-pulse">Загрузка видео...</div>
            </div>
          ) : video?.videoUrl?.startsWith("/") ? (
            <video
              className="w-full h-full object-contain"
              controls
              preload="metadata"
              poster={image?.src || "/img/gallery/default.jpg"}
              aria-label={`Видео: ${video.title}`}
            >
              <source src={video.videoUrl} type="video/mp4" />
              Ваш браузер не поддерживает воспроизведение видео.
            </video>
          ) : (
            <div className="responsive-iframe-container">
              <iframe
                src={video?.videoUrl}
                title={video?.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                aria-label={`Встроенное видео: ${video?.title}`}
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

        <style jsx>{`
          .responsive-iframe-container {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
            height: 0;
            overflow: hidden;
          }
          .responsive-iframe-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
          }
        `}</style>
      </main>
    </>
  );
}
