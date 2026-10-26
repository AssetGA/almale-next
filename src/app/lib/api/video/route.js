import { NextResponse } from "next/server";
import Video from "../../../../models/Video";
import { connectToDatabase } from "../../mongodb";
import VideoTranslation from "../../../../models/VideoTranslation";

const cache = new Map();
const TTL_MS = 60_000;
const cacheHeaders = {
  "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
};

export async function GET(request) {
  await connectToDatabase();

  const lang = new URL(request.url).searchParams.get("lang") || "ru";
  const hit = cache.get(lang);
  if (hit && Date.now() - hit.at < TTL_MS) {
    return NextResponse.json(hit.data, { status: 200, headers: cacheHeaders });
  }

  try {
    const [list, own, fallback] = await Promise.all([
      Video.find().lean(),
      VideoTranslation.find({ language: lang }).lean(),
      lang === "en"
        ? []
        : VideoTranslation.find({ language: "en" }).lean(),
    ]);
    const byId = new Map(fallback.map((item) => [String(item.videoId), item]));
    for (const item of own) byId.set(String(item.videoId), item);
    const newList = list.map((elem, index) => {
      const translation = byId.get(String(index));
      return {
        ...elem,
        description: translation?.description,
        title: translation?.title,
      };
    });
    cache.set(lang, { at: Date.now(), data: newList });
    return NextResponse.json(newList, { status: 200, headers: cacheHeaders });
  } catch (error) {
    return NextResponse.json(
      {
        message: "На сервере произошла ошибка попробуйте позже",
      },
      { status: 500 }
    );
  }
}
