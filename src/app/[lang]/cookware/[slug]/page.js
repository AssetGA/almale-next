import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryCopy, categoryNav, categorySlugs } from "../../../lib/categories";
import { canonicalUrl, locales, pageAlternates } from "../../../lib/locales";
import { STORE } from "../../../lib/store";

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const page = categoryCopy(lang, slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: pageAlternates(lang, `/cookware/${slug}`),
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonicalUrl(lang, `/cookware/${slug}`),
      type: "website",
    },
  };
}

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    categorySlugs.map((slug) => ({ lang, slug }))
  );
}

export default async function Page({ params }) {
  const { lang, slug } = await params;
  const page = categoryCopy(lang, slug);
  if (!page) notFound();
  const siblings = categoryNav(lang).filter((item) => item.slug !== slug);

  return (
    <article className="px-5 pb-20 pt-8 sm:px-10 lg:px-24">
      <h1
        className="max-w-3xl text-3xl font-bold leading-tight"
        style={{ fontFamily: "Montserrat-Bold" }}
      >
        {page.h1}
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-6">{page.lead}</p>
      <p className="mt-4 max-w-2xl text-sm leading-6">{page.description}</p>
      <p className="mt-4 text-sm">
        {STORE.name}, {STORE.locality}.{" "}
        <a className="underline" href={`tel:${STORE.phoneTel}`}>
          {STORE.phoneDisplay}
        </a>
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/${lang}/product`}
          className="rounded-md bg-green px-5 py-3 text-sm font-bold text-white hover:bg-green-light"
        >
          Alma Le
        </Link>
        {siblings.map((item) => (
          <Link
            key={item.slug}
            href={`/${lang}/cookware/${item.slug}`}
            className="rounded-md bg-gray-header px-5 py-3 text-sm font-bold hover:bg-green hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </article>
  );
}
