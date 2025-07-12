"use server";

import fetch from "node-fetch";

export async function fetchVideo(lang) {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/lib/api/video`);
    url.searchParams.append("lang", lang); // Добавляем параметр lang
    const res = await fetch(url.href);
    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_SITE_URL}/lib/api/product`,
    //   {
    //     params: { lang: lang },
    //   }
    // ); // Замените на URL вашего API
    if (!res.ok) throw new Error("Ошибка при загрузке товаров");
    const videos = await res.json();
    return videos;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Возвращаем пустой массив, если произошла ошибка
  }
}

export async function fetchVideoById(lang, id) {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/lib/api/video`);
    url.searchParams.append("lang", lang);

    const res = await fetch(url.href, {
      // для кэша на стороне браузера можно добавить:
      // next: { revalidate: 60 }, // если используется в Next.js 13+ App Router
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("Ошибка при загрузке видео");

    const videos = await res.json();

    // Найдём видео по id
    const video = videos.find((v) => String(v.id) === String(id));
    return video ?? null;
  } catch (error) {
    console.error("Ошибка при загрузке видео:", error);
    return null;
  }
}
