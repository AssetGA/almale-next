import React from "react";
import { getDictionary } from "../dictionaries";

export default async function Payment({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return (
    <div className="flex justify-center justify-items-center h-96">
      <h1 className="mx-auto my-auto">{t.payment.head}</h1>
    </div>
  );
}
