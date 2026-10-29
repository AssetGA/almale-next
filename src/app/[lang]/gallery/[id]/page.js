import React from "react";
import VideoPage from "../../../components/VideoPage";
import { getDictionary } from "../../dictionaries";
import { fetchVideoById, fetchVideo } from "../../../actions/video";
import { canonicalUrl, locales, pageAlternates } from "../../../lib/locales";

// app/video/[id]/page.tsx (или любую страницу, где используешь видео)

export async function generateMetadata({ params }) {
  const { id, lang } = await params;
  const video = await fetchVideoById(lang, id);
  if (!video) {
    return {
      title: "Alma Le",
      robots: { index: false, follow: false },
    };
  }

  const url = canonicalUrl(lang, `/gallery/${id}`);

  return {
    title: video.title,
    description: video.description,
    robots: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
    },
    alternates: pageAlternates(lang, `/gallery/${id}`),
    openGraph: {
      title: video.title,
      description: video.description,
      type: "video.other",
      url,
      video: {
        url,
        width: 1280,
        height: 720,
      },
    },
    twitter: {
      card: "player",
      title: video.title,
      description: video.description,
      player: url,
    },
  };
}

export async function generateStaticParams() {
  // Укажите возможные значения для [lang] и [id]
  const langs = locales;
  const params = [];

  for (const lang of langs) {
    const videos = await fetchVideo(lang); // Получаем продукты для текущего языка

    if (videos.length === 0) {
      console.warn(`No products found for language: ${lang}`);
      continue; // Пропускаем, если для языка нет продуктов
    }

    // Преобразуем список продуктов в массив id
    const videoIds = videos.map((elem) => elem._id);

    videoIds.forEach((id) => {
      params.push({ lang, id });
    });
  }

  return params; // Возвращаем параметры для генерации статичных страниц
}

async function page({ params }) {
  const { lang, id } = await params;
  const t = await getDictionary(lang);
  const pathname = `/${lang}/gallery/${id}`;
  return <VideoPage id={id} lang={lang} pathname={pathname} />;
}

export default page;
