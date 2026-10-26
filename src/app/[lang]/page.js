import Main from "../components/Main";
import { getDictionary } from "./dictionaries";
import { languageAlternates } from "../lib/locales";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return {
    title: `${t.metadata.title}`,
    description: t.metadata.description,
    metadataBase: new URL(baseUrl),
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
    alternates: {
      languages: languageAlternates(baseUrl, ""),
    },
    keywords: `${t.metadata.keywords}`,

    openGraph: {
      title: `${t.metadata.title}`,
      description: `${t.metadata.description}`,
      images: [`${baseUrl}/img/main.webp`, `${baseUrl}/img/front.webp`], // ✅ Supports array
      type: "website",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}`,
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
        url: `${site}/ru`,
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
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: "Alma Le copper cookware set",
              description:
                "Unboxing of the Alma Le premium copper cookware set: pots, saucepan and frying pan.",
              thumbnailUrl:
                "https://img.youtube.com/vi/AAHCllXUXrI/maxresdefault.jpg",
              uploadDate: "2026-04-26T00:00:00.000Z",
              duration: "PT4M30S",
              publisher: {
                "@type": "Organization",
                name: "Alma Le",
                logo: {
                  "@type": "ImageObject",
                  url: `${site}/img/logo.png`,
                },
              },
              embedUrl: "https://www.youtube.com/embed/AAHCllXUXrI",
              contentUrl: "https://www.youtube.com/watch?v=AAHCllXUXrI",
            },
            {
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: "Готовим на медной посуде Alma Le",
              description: "Готовка на медной посуде Alma Le с поваром из Казахстана.",
              thumbnailUrl:
                "https://img.youtube.com/vi/nFNJUepGYHY/maxresdefault.jpg",
              uploadDate: "2026-04-26T00:00:00.000Z",
              duration: "PT1M20S",
              publisher: {
                "@type": "Organization",
                name: "Alma Le",
                logo: {
                  "@type": "ImageObject",
                  url: `${site}/img/logo.png`,
                },
              },
              embedUrl: "https://www.youtube.com/embed/nFNJUepGYHY",
              contentUrl: "https://www.youtube.com/watch?v=nFNJUepGYHY",
            },
            {
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: "Alma Le copper saucepan",
              description: "Cooking in an Alma Le copper saucepan.",
              thumbnailUrl:
                "https://img.youtube.com/vi/5W05UwE_LQ0/maxresdefault.jpg",
              uploadDate: "2026-04-26T00:00:00.000Z",
              duration: "PT2M47S",
              publisher: {
                "@type": "Organization",
                name: "Alma Le",
                logo: {
                  "@type": "ImageObject",
                  url: `${site}/img/logo.png`,
                },
              },
              embedUrl: "https://www.youtube.com/embed/5W05UwE_LQ0",
              contentUrl: "https://www.youtube.com/watch?v=5W05UwE_LQ0",
            },
          ]),
        }}
      />
      <Main lang={lang} />
    </>
  );
}
