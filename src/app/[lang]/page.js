import Head from "next/head";
import Main from "../components/Main";
import { getDictionary } from "./dictionaries";

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
      canonical: `${baseUrl}/en`,
      languages: {
        "x-default": `${baseUrl}/en`,
        en: `${baseUrl}/en`,
        ru: `${baseUrl}/ru`,
        kk: `${baseUrl}/kz`, // ✅ Correct ISO 639-1 language code
      },
    },
    keywords: `${t.metadata.keywords}`,

    icons: {
      icon: "/img/icon.png", // /public path
      ...(lang === "en" && {
        other: {
          rel: "canonical",
          url: `${baseUrl}/en`,
        },
      }),
    },
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
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Медный набор посуды Alma Le",
              description: "Профессиональная медная посуда для кухни.",
              image: [
                "https://www.alma-le.com/img/set/0.png",
                "https://www.alma-le.com/img/set/1.png",
                "https://www.alma-le.com/img/set/2.png",
              ],
              brand: {
                "@type": "Brand",
                name: "Alma Le",
              },
              offers: {
                "@type": "Offer",
                price: "790",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                url: "https://www.alma-le.com/" + lang + "/product",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "VideoObject",
                name: "Exploring the Mountains",
                description: "A fascinating journey through the mountains.",
                thumbnailUrl:
                  "https://img.youtube.com/vi/AAHCllXUXrI/maxresdefault.jpg",
                uploadDate: "2023-11-30",
                duration: "PT4M30S",
                publisher: {
                  "@type": "Organization",
                  name: "Alma Le",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.alma-le.com/img/logo.png",
                  },
                },
                embedUrl: "https://www.youtube.com/embed/AAHCllXUXrI",
                contentUrl: "https://www.youtube.com/watch?v=AAHCllXUXrI",
              },
              {
                "@context": "https://schema.org",
                "@type": "VideoObject",
                name: "Ocean Adventures",
                description: "Discover adventures across the ocean.",
                thumbnailUrl:
                  "https://img.youtube.com/vi/nFNJUepGYHY/maxresdefault.jpg",
                uploadDate: "2023-12-12",
                duration: "PT1M20S",
                publisher: {
                  "@type": "Organization",
                  name: "Alma Le",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.alma-le.com/img/logo.png",
                  },
                },
                embedUrl: "https://www.youtube.com/embed/nFNJUepGYHY",
                contentUrl: "https://www.youtube.com/watch?v=nFNJUepGYHY",
              },
              {
                "@context": "https://schema.org",
                "@type": "VideoObject",
                name: "City Life Vibes",
                description: "Feel the dynamic vibes of city life.",
                thumbnailUrl:
                  "https://img.youtube.com/vi/5W05UwE_LQ0/maxresdefault.jpg",
                uploadDate: "2023-11-28",
                duration: "PT2M47S",
                publisher: {
                  "@type": "Organization",
                  name: "Alma Le",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.alma-le.com/img/logo.png",
                  },
                },
                embedUrl: "https://www.youtube.com/embed/5W05UwE_LQ0",
                contentUrl: "https://www.youtube.com/watch?v=5W05UwE_LQ0",
              },
            ]),
          }}
        />
      </Head>
      <Main lang={lang} />
    </>
  );
}
