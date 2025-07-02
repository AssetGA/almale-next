import React from "react";
import VideoPage from "../../../components/VideoPage";
import { getDictionary } from "../../dictionaries";
import { fetchVideoById } from "../../../actions/video";

// app/video/[id]/page.tsx (или любую страницу, где используешь видео)

export async function generateMetadata({ params }) {
  const { id, lang } = await params;
  const video = await fetchVideoById(lang, id); // или из JSON напрямую
  console.log("video", video);
  if (!video) return {};

  return {
    title: video.title,
    description: video.description,
    openGraph: {
      title: video.title,
      description: video.description,
      type: "video.other",
      url: `${process.env.NEXT_PUBLIC_SITE_URL + "/" + lang}/gallery/${
        video.id
      }`,
      video: {
        url: `${process.env.NEXT_PUBLIC_SITE_URL + "/" + lang}/gallery/${
          video.id
        }`,
        width: 1280,
        height: 720,
      },
    },
    twitter: {
      card: "player",
      title: video.title,
      description: video.description,
      player: `${process.env.NEXT_PUBLIC_SITE_URL + "/" + lang}/gallery/${
        video.id
      }`,
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
