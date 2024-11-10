import "../globals.css";
import "leaflet/dist/leaflet.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import localFont from "next/font/local";
import StoreProvider from "../StoreProvider";
import { getDictionary } from "./dictionaries";

const montserrat = localFont({
  src: "../../../public/fonts/Montserat/Montserrat-Medium.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: {
    template: "Alma Le - Набор профессиональной медной посуды премиум класса",
  },
  description:
    "Премиум набор медной посуды Alma Le: равномерный нагрев, бактериальные свойства и уникальный вкус. С внутренним слоем из нержавеющей стали и внешним покрытием из меди и алюминия, идеально для готовки на любой кухне.",
  keywords:
    "AlmaLe, медная посуда, кастрюли, сковороды, сотейники, нержавеющая сталь, медь, алюминий, кухня",
  verification: {
    google: "rn1ZlN9g8g7fHia45p5G5UtdckF8ogxRywzzlJrHY-k",
  },
};

{
  /* <meta name="google-site-verification" content="" />; */
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "kz" }, { lang: "ru" }];
}

export default async function LocaleLayout({ children, params: { lang } }) {
  const t = await getDictionary(lang);
  return (
    <html lang={lang}>
      <body className={montserrat.className}>
        <StoreProvider lang={lang}>
          <Navbar lang={lang} t={t} />
          <main className="xl:container xl:mx-auto">{children}</main>
          <Footer lang={lang} t={t} />
        </StoreProvider>
      </body>
    </html>
  );
}
