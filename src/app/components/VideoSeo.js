import Head from "next/head";

function makeAbsoluteUrl(path) {
  if (!path) return undefined;
  if (path.startsWith("http")) return path; // уже абсолютный
  return `${process.env.NEXT_PUBLIC_SITE_URL}${
    path.startsWith("/") ? path : `/${path}`
  }`;
}

export default function VideoSeo({ video, image, pathname }) {
  if (!video) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description || "Видео",
    thumbnailUrl: makeAbsoluteUrl(image),
    uploadDate: video.createdAt || new Date().toISOString(),
    contentUrl: video.videoUrl,
    duration: "PT3M42S", // если у тебя есть реальная длительность, лучше подставить
    embedUrl: makeAbsoluteUrl(pathname),
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: "https://schema.org/WatchAction",
      userInteractionCount: video.views || 0,
    },
  };

  return (
    <Head>
      <script
        id="video-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
