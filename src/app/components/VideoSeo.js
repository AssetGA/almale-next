"use client";

import { usePathname } from "next/navigation";

export default function VideoSeo({ video, image }) {
  const pathname = usePathname();

  if (!video) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: `${process.env.NEXT_PUBLIC_SITE_URL}${image}`,
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
    <script
      id="video-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
