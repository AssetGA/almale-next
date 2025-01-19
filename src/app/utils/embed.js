export function convertToEmbedUrl(youtubeUrl) {
  const url = new URL(youtubeUrl);
  const videoId = url.searchParams.get("v");
  const startTime = url.searchParams.get("t");

  if (!videoId) {
    throw new Error("Invalid YouTube URL: Missing video ID");
  }

  let embedUrl = `https://www.youtube.com/embed/${videoId}`;
  if (startTime) {
    const seconds = parseInt(startTime.replace("s", ""), 10);
    embedUrl += `?start=${seconds}`;
  }

  return embedUrl;
}
