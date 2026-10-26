"use server";

import { getLocalizedVideos } from "../lib/videos";

export async function fetchVideo(lang) {
  try {
    return await getLocalizedVideos(lang);
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
}

export async function fetchVideoById(lang, id) {
  try {
    const videos = await getLocalizedVideos(lang);
    return videos.find((video) => String(video._id) === String(id)) ?? null;
  } catch (error) {
    console.error("Error fetching video:", error);
    return null;
  }
}
