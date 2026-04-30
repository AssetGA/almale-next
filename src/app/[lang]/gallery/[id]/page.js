import React from "react";
import VideoPage from "../../../components/VideoPage";
import { getDictionary } from "../../dictionaries";
import { fetchVideoById, fetchVideo } from "../../../actions/video";

// app/video/[id]/page.tsx (или любую страницу, где используешь видео)

export async function generateMetadata({ params }) {
  const { id, lang } = await params;
  const video = await fetchVideoById(lang, id); // или из JSON напрямую
  if (!video) return {};
  if (!video) {
    console.error(`❌ Ошибка: Товар с ID ${id} не найден`);
    return {
      title: "Товар не найден | Alma Le",
      description: "Извините, этот товар недоступен.",
    };
  }

  return {
    title: video.title,
    description: video.description,
    robots: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
    },
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

export async function generateStaticParams() {
  // Укажите возможные значения для [lang] и [id]
  const langs = ["kz", "en", "ru"]; // Например, поддерживаемые языки
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
