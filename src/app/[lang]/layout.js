import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import localFont from "next/font/local";
import StoreProvider from "../StoreProvider";
import { getDictionary } from "./dictionaries";
import { htmlLang, localeParams } from "../lib/locales";
import SiteEnter from "../components/SiteEnter";
import dynamic from "next/dynamic";
import { Noto_Sans_Arabic } from "next/font/google";

const ChatWindow = dynamic(() => import("../components/ChatWindow"));

const montserrat = localFont({
  src: "../../../public/fonts/Montserat/Montserrat-Medium.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "600"],
  display: "swap",
});

// export async function getServerSideProps({ req }) {
//   // Извлекаем язык из URL
//   const { pathname } = await req;
//   const langMatch = pathname.match(/^\/(kz|en|ru)(\/|$)/);
//   const lang = langMatch ? langMatch[1] : "kz"; // Если язык найден, берем его, иначе — 'kz'

//   // Путь запроса

//   // Возвращаем данные как props для компонента
//   return {
//     props: {
//       lang,
//     },
//   };
// }

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return {
    verification: {
      google: "rn1ZlN9g8g7fHia45p5G5UtdckF8ogxRywzzlJrHY-k",
    },

    icons: {
      icon: "/img/icon.png", // /public path
      ...(lang === "en" && {
        other: {
          hrefLang: `${lang}`,
          url: `${baseUrl}/${lang}`,
        },
      }),
    },
  };
}

export function generateStaticParams() {
  return localeParams;
}

export default async function LocaleLayout({ children, params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <html lang={htmlLang(lang)} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body className={lang === "ar" ? arabic.className : montserrat.className}>
        <StoreProvider lang={lang}>
          <Navbar lang={lang} t={t} />
          <ChatWindow t={t} lang={lang} />
          <SiteEnter>
            <main className="xl:container xl:mx-auto mt-24">{children}</main>
            <Footer lang={lang} t={t} />
          </SiteEnter>
        </StoreProvider>
      </body>
    </html>
  );
}
