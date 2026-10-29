import Main from "../components/Main";
import { getYoutubeVideos } from "../components/adCopy";
import { getDictionary } from "./dictionaries";
import { canonicalUrl, pageAlternates, siteOrigin } from "../lib/locales";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  const baseUrl = siteOrigin();

  return {
    title: `${t.metadata.title}`,
    description: t.metadata.description,
    twitter: {
      card: "summary_large_image",
      title: `${t.metadata.title}`,
      description: `${t.metadata.description}`,
      images: [`${baseUrl}/img/set/0.png`],
    },
    other: {
      "al:ios:url":
        "https://www.instagram.com/almale_com?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", // ✅ Instagram App Link
      "al:android:url": "https://www.instagram.com/almale_com/", // ✅ Instagram Web Link
    },
    alternates: pageAlternates(lang, ""),
    keywords: `${t.metadata.keywords}`,

    openGraph: {
      title: `${t.metadata.title}`,
      description: `${t.metadata.description}`,
      images: [`${baseUrl}/img/main.webp`, `${baseUrl}/img/front.webp`], // ✅ Supports array
      type: "website",
      url: canonicalUrl(lang, ""),
    },
  };
}

export default async function Home({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://www.alma-le.com";
  const pageUrl = `${site}/${lang}`;
  const productUrl = `${site}/${lang}/product`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Alma Le",
        url: `${site}/${lang}`,
        logo: `${site}/img/logo.png`,
        sameAs: ["https://www.instagram.com/almale_com/"],
      },
      {
        "@type": "WebSite",
        name: "Alma Le",
        url: pageUrl,
        inLanguage: lang === "kz" ? "kk" : lang,
        publisher: { "@type": "Organization", name: "Alma Le" },
      },
      {
        "@type": "Product",
        name: t.metadata.title,
        description: t.metadata.description,
        category: t.product.one,
        material: t.brand.three,
        image: [
          `${site}/img/set/0.png`,
          `${site}/img/set/1.png`,
          `${site}/img/set/2.png`,
        ],
        brand: { "@type": "Brand", name: "Alma Le" },
        offers: {
          "@type": "Offer",
          price: "395000",
          priceCurrency: "KZT",
          availability: "https://schema.org/InStock",
          url: productUrl,
        },
      },
    ],
  };

  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/img/main.webp"
        media="(max-width: 639px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/img/front.webp"
        media="(min-width: 640px)"
        fetchPriority="high"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getYoutubeVideos(lang).map((video) => ({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: video.title,
              description: video.description,
              thumbnailUrl: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
              uploadDate: video.uploadDate,
              duration: video.duration,
              publisher: {
                "@type": "Organization",
                name: "Alma Le",
                logo: {
                  "@type": "ImageObject",
                  url: `${site}/img/logo.png`,
                },
              },
              embedUrl: `https://www.youtube.com/embed/${video.id}`,
              contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
            }))
          ),
        }}
      />
      <Main lang={lang} />
    </>
  );
}
