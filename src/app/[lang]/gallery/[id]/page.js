import React from "react";
import VideoPage from "../../../components/VideoPage";
import { getDictionary } from "../../dictionaries";
import { getVideoById } from "../../../store/videoSlice";

// app/video/[id]/page.tsx (или любую страницу, где используешь видео)

export async function generateMetadata({ params }) {
  const { id } = await params;
  const video = await getVideoById(id); // или из JSON напрямую
  if (!video) return {};

  return {
    title: video.title,
    description: video.description,
    openGraph: {
      title: video.title,
      description: video.description,
      type: "video.other",
      url: `https://example.com/video/${video.id}`,
      video: {
        url: video.videoUrl,
        width: 1280,
        height: 720,
      },
    },
    twitter: {
      card: "player",
      title: video.title,
      description: video.description,
      player: video.videoUrl,
    },
  };
}

async function page({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <>
      <VideoPage />
    </>
  );
}

export default page;
