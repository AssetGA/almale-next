"use client";

import Script from "next/script";

export default function VideoSeo({ video, image }) {
  if (!video) return null;

  return (
    <Script
      id="video-jsonld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: video.title,
          description: video.description,
          thumbnailUrl: `${process.env.NEXT_PUBLIC_SITE_URL}${image}`,
          uploadDate: video.createdAt || new Date().toISOString(),
          contentUrl: video.videoUrl,
          duration: "PT3M42S",
          embedUrl: video.videoUrl,
          interactionStatistic: {
            "@type": "InteractionCounter",
            interactionType: "https://schema.org/WatchAction",
            userInteractionCount: video.views || 0,
          },
        }),
      }}
    />
  );
}
