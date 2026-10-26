import Video from "../../models/Video";
import VideoTranslation from "../../models/VideoTranslation";
import { connectToDatabase } from "./mongodb";

function plain(value) {
  return JSON.parse(JSON.stringify(value));
}

export async function getLocalizedVideos(lang) {
  await connectToDatabase();
  const [list, own, fallback] = await Promise.all([
    Video.find().lean(),
    VideoTranslation.find({ language: lang }).lean(),
    lang === "en"
      ? []
      : VideoTranslation.find({ language: "en" }).lean(),
  ]);
  const byId = new Map(fallback.map((item) => [String(item.videoId), item]));
  for (const item of own) byId.set(String(item.videoId), item);

  return plain(
    list.map((elem, index) => {
      const translation = byId.get(String(index));
      return {
        ...elem,
        description: translation?.description || elem.description,
        title: translation?.title || elem.title,
      };
    })
  );
}
