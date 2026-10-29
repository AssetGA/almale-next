import React from "react";
import { getDictionary } from "../dictionaries";
import { noIndexMetadata } from "../../lib/locales";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return noIndexMetadata(lang, "/payment");
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "kz" }, { lang: "ru" }, { lang: "de" }, { lang: "ar" }];
}

export default async function Payment({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return (
    <div className="flex justify-center justify-items-center h-96">
      <h1 className="mx-auto my-auto">{t.payment.head}</h1>
    </div>
  );
}
