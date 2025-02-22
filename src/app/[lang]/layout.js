import "../globals.css";
import "leaflet/dist/leaflet.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import localFont from "next/font/local";
import StoreProvider from "../StoreProvider";
import { getDictionary } from "./dictionaries";
import { headers } from "next/headers";
import ChatWindow from "../components/ChatWindow";

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
    verification: {
      google: "rn1ZlN9g8g7fHia45p5G5UtdckF8ogxRywzzlJrHY-k",
    },

    icons: {
      icon: "/img/icon.png", // /public path
      ...(lang === "en" && {
        other: {
          rel: "canonical",
          url: `${baseUrl}/${lang}`,
        },
      }),
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
