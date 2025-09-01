import Head from "next/head";

export default function VideoSeo({ video, image, pathname }) {
  if (!video) return null;
  console.log("pathn", pathname);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/${image}`,
    uploadDate: video.createdAt || new Date().toISOString(),
    contentUrl: video.videoUrl,
    duration: "PT3M42S",
    embedUrl: `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`,
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
