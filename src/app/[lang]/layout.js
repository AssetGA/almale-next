import "../globals.css";
import "leaflet/dist/leaflet.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import localFont from "next/font/local";
import StoreProvider from "../StoreProvider";
import { getDictionary } from "./dictionaries";
import { headers } from "next/headers";
import ChatWindow from "../components/ChatWindow";
import Head from "next/head";

const montserrat = localFont({
  src: "../../../public/fonts/Montserat/Montserrat-Medium.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export async function getServerSideProps({ req }) {
  // Извлекаем язык из URL
  const { pathname } = await req;
  const langMatch = pathname.match(/^\/(kz|en|ru)(\/|$)/);
  const lang = langMatch ? langMatch[1] : "kz"; // Если язык найден, берем его, иначе — 'kz'

  // Путь запроса

  // Возвращаем данные как props для компонента
  return {
    props: {
      lang,
    },
  };
}

export async function generateMetadata({ params }) {
  const heads = await headers();
  const pathname = heads.get("x-url");

  const { lang } = await params;
  const t = await getDictionary(lang);
  const canonicalUrl = pathname;

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
      canonical: `${baseUrl}/${lang || "en"}`,
      languages: {
        "x-default": `${baseUrl}/en`,
        en: `${baseUrl}/en`,
        ru: `${baseUrl}/ru`,
        kk: `${baseUrl}/kz`, // ✅ Correct ISO 639-1 language code
      },
    },
    keywords: `${t.metadata.keywords}`,
    verification: {
      google: "rn1ZlN9g8g7fHia45p5G5UtdckF8ogxRywzzlJrHY-k",
    },

    icons: {
      icon: "/img/icon.png", // /public path
      ...(lang === "en" && {
        other: {
          rel: "canonical",
          url: `${canonicalUrl}`,
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

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "kz" }, { lang: "ru" }];
}

export default async function LocaleLayout({ children, params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <html lang={lang === "kz" ? "kk" : lang}>
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
      <body className={`${montserrat.className}`}>
        <StoreProvider lang={lang}>
          <Navbar lang={lang} t={t} />
          <ChatWindow t={t} />
          <main className="xl:container xl:mx-auto">{children}</main>
          <Footer lang={lang} t={t} />
        </StoreProvider>
      </body>
    </html>
  );
}
