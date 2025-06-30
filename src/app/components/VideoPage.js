"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useParams, useRouter } from "next/navigation";
import { getVideoById } from "../store/videoSlice";

export default function VideoPage() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const videos = useAppSelector((state) => state.video.entity);
  const loading = useAppSelector((state) => state.video.isLoading);
  const [currentId, setCurrentId] = useState(Number(params.id));

  const video = useMemo(() => {
    const id = Number(params.id);
    return videos.find((_, index) => index === id);
  }, [videos, params.id]);

  useEffect(() => {
    if (!video && loading) {
      dispatch(getVideoById(currentId));
    }
  }, [dispatch, currentId, video]);

  const goToVideo = (newId) => {
    if (newId >= 0 && newId < videos.length) {
      setCurrentId(newId);
      router.push(`/gallery/${newId}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-black/30 text-white">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
        {video?.title}
      </h1>
      <div className="grid grid-cols-2">
        <button
          className="px-4 py-3 w-full hover:bg-gray-header hover:text-black/80 transition-all duration-1000"
          disabled={currentId === 0}
          onClick={() => goToVideo(currentId - 1)}
        >
          предыдущее
        </button>
        <button
          className="px-4 py-3 w-full hover:bg-gray-header hover:text-black/80 transition-all duration-1000"
          disabled={currentId === videos.length - 1}
          onClick={() => goToVideo(currentId + 1)}
        >
          следующее
        </button>
      </div>
      <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-lg border border-white/10">
        {loading || !video ? (
          <div className="w-full h-full flex items-center justify-center">
            Загрузка...
          </div>
        ) : video.videoUrl[0] === "/" ? (
          <video
            className="w-full h-full object-contain"
            controls
            preload="auto"
            poster="/img/gallery/1.JPEG"
          >
            <source src={video.videoUrl} type="video/mp4" />
            Ваш браузер не поддерживает воспроизведение видео.
          </video>
        ) : (
          <iframe
            width="100%"
            height="500"
            src={video.videoUrl}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>

      <p className="mt-6 text-lg text-gray-300 text-center max-w-2xl">
        {video?.description}
      </p>
    </div>
  );
}
