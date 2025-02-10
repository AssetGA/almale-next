import "../globals.css";
import "leaflet/dist/leaflet.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import localFont from "next/font/local";
import StoreProvider from "../StoreProvider";
import { getDictionary } from "./dictionaries";
import { headers } from "next/headers";
import ChatWindow from "../components/ChatWindow";
import { getUser } from "../lib/dai";

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

  const elem = lang;

  return {
    title: `${t.metadata.title} - Alma Le`,
    description: t.metadata.description,
    twitter: {
      card: "summary_large_image",
      title: `${t.metadata.title}`,
      description: `${t.metadata.description}`,
      images: ["https://alma-le.com/img/set/0.png"],
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
        kz: `${baseUrl}/kz`, // ✅ Correct ISO 639-1 language code
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
  };
}

{
  /* <meta itemprop="name" content="Luxury Copper Cookware Set">
<meta itemprop="description" content="Handcrafted copper cookware set for professional and home chefs. Perfect heat control, premium quality, and timeless design.">
<meta itemprop="image" content="https://yourwebsite.com/images/copper-cookware.jpg">
<meta itemprop="brand" content="Alma Le">
<meta itemprop="sku" content="COPPERSET-001">
<meta itemprop="priceCurrency" content="USD">
<meta itemprop="price" content="299.99">
<meta itemprop="availability" content="InStock"> */
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "kz" }, { lang: "ru" }];
}

export default async function LocaleLayout({ children, params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={montserrat.className}>
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
