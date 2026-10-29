import Link from "next/link";
import { canonicalUrl, pageAlternates } from "../../lib/locales";

const INSTAGRAM = "https://www.instagram.com/almale_com/";

const copy = {
  ru: {
    title: "Alma Le в Instagram",
    description:
      "Профиль Alma Le в Instagram: подарки, готовка и набор медной посуды. Ссылки на сайт по тем же темам.",
    lead: "В профиле @almale_com фото и ролики набора. Ниже те же темы на сайте: подарок, готовка и сам набор.",
    profile: "Открыть @almale_com",
    themes: [
      {
        title: "Подарок",
        text: "Набор как подарок маме, жене или на праздник.",
        href: "/gift",
        link: "Страница подарка",
      },
      {
        title: "Готовка",
        text: "Как готовят на кастрюлях, сковороде и сотейнике.",
        href: "/recipes",
        link: "Страница готовки",
      },
      {
        title: "Набор",
        text: "Состав и цена набора Alma Le 1.0.",
        href: "/set",
        link: "Страница набора",
      },
    ],
  },
  en: {
    title: "Alma Le on Instagram",
    description:
      "Alma Le on Instagram: gifts, cooking and the copper cookware set, with the same topics on the site.",
    lead: "The @almale_com profile shows the set. The same topics are on the site: a gift, cooking and the set itself.",
    profile: "Open @almale_com",
    themes: [
      {
        title: "Gift",
        text: "The set as a gift.",
        href: "/gift",
        link: "Gift page",
      },
      {
        title: "Cooking",
        text: "Cooking with the pots, pan and saucepan.",
        href: "/recipes",
        link: "Cooking page",
      },
      {
        title: "The set",
        text: "What is in the Alma Le 1.0 set, and the price.",
        href: "/set",
        link: "Set page",
      },
    ],
  },
  kz: {
    title: "Alma Le Instagram-да",
    description:
      "Alma Le Instagram парақшасы: сыйлық, дайындау және мыс ыдыс жиынтығы. Сол тақырыптар сайтта.",
    lead: "@almale_com парақшасында жиынтықтың фотосы мен видеосы. Төменде сол тақырыптар сайтта.",
    profile: "@almale_com ашу",
    themes: [
      {
        title: "Сыйлық",
        text: "Жиынтық сыйлық ретінде.",
        href: "/gift",
        link: "Сыйлық беті",
      },
      {
        title: "Дайындау",
        text: "Кастрюль, таба және сотейникте дайындау.",
        href: "/recipes",
        link: "Дайындау беті",
      },
      {
        title: "Жиынтық",
        text: "Alma Le 1.0 құрамы және бағасы.",
        href: "/set",
        link: "Жиынтық беті",
      },
    ],
  },
  de: {
    title: "Alma Le auf Instagram",
    description:
      "Alma Le auf Instagram: Geschenk, Kochen und das Kupfer-Set. Dieselben Themen auf der Website.",
    lead: "Im Profil @almale_com sind Fotos und Filme des Sets. Unten dieselben Themen auf der Website.",
    profile: "@almale_com öffnen",
    themes: [
      {
        title: "Geschenk",
        text: "Das Set als Geschenk.",
        href: "/gift",
        link: "Geschenkseite",
      },
      {
        title: "Kochen",
        text: "Kochen mit Töpfen, Pfanne und Stielkasserolle.",
        href: "/recipes",
        link: "Kochseite",
      },
      {
        title: "Das Set",
        text: "Inhalt und Preis des Sets Alma Le 1.0.",
        href: "/set",
        link: "Set-Seite",
      },
    ],
  },
  ar: {
    title: "Alma Le على إنستغرام",
    description:
      "حساب Alma Le على إنستغرام: هدية وطبخ والطقم النحاسي. نفس المواضيع على الموقع.",
    lead: "في @almale_com صور وفيديو للطقم. في الأسفل نفس المواضيع على الموقع.",
    profile: "افتح @almale_com",
    themes: [
      {
        title: "هدية",
        text: "الطقم هدية.",
        href: "/gift",
        link: "صفحة الهدية",
      },
      {
        title: "الطبخ",
        text: "الطبخ في القدور والمقلاة ووعاء الصلصة.",
        href: "/recipes",
        link: "صفحة الطبخ",
      },
      {
        title: "الطقم",
        text: "محتوى طقم Alma Le 1.0 وسعره.",
        href: "/set",
        link: "صفحة الطقم",
      },
    ],
  },
};

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const page = copy[lang] || copy.ru;
  return {
    title: page.title,
    description: page.description,
    alternates: pageAlternates(lang, "/instagram"),
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonicalUrl(lang, "/instagram"),
      type: "website",
    },
  };
}

export default async function Page({ params }) {
  const { lang } = await params;
  const page = copy[lang] || copy.ru;

  return (
    <article className="px-5 pb-20 pt-8 sm:px-10 lg:px-24">
      <h1
        className="max-w-3xl text-3xl font-bold leading-tight"
        style={{ fontFamily: "Montserrat-Bold" }}
      >
        {page.title}
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-6">{page.lead}</p>
      <a
        href={INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-sm font-bold text-green underline"
      >
        {page.profile}
      </a>
      <div className="mt-10 grid max-w-5xl gap-4 sm:grid-cols-3">
        {page.themes.map((theme) => (
          <section key={theme.href} className="rounded-lg bg-gray-header p-5">
            <h2 className="text-lg font-bold">{theme.title}</h2>
            <p className="mt-2 text-sm leading-6">{theme.text}</p>
            <Link
              href={`/${lang}${theme.href}`}
              className="mt-4 block text-sm font-bold text-green underline"
            >
              {theme.link}
            </Link>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm font-bold text-green underline"
            >
              Instagram
            </a>
          </section>
        ))}
      </div>
    </article>
  );
}
