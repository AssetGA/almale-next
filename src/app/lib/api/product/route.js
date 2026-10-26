import { NextResponse } from "next/server";
import ProductTranslation from "../../../../models/ProductTranslate";
import Product from "../../../../models/Product";
import { connectToDatabase } from "../../mongodb";

const cache = new Map();
const TTL_MS = 60_000;
const cacheHeaders = {
  "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
};

export async function GET(request) {
  await connectToDatabase();

  const lang = new URL(request.url).searchParams.get("lang") || "ru";
  const hit = cache.get(lang);
  if (hit && Date.now() - hit.at < TTL_MS) {
    return NextResponse.json(hit.data, { status: 200, headers: cacheHeaders });
  }

  try {
    const [list, own, fallback] = await Promise.all([
      Product.find().lean(),
      ProductTranslation.find({ language: lang }).lean(),
      lang === "en" ? [] : ProductTranslation.find({ language: "en" }).lean(),
    ]);
    const byProduct = new Map(
      fallback.map((item) => [String(item.product), item])
    );
    for (const item of own) byProduct.set(String(item.product), item);
    const newList = list.map((elem) => {
      const translation = byProduct.get(String(elem._id));
      return {
        ...elem,
        name: translation?.name,
        description: translation?.description,
        diameter: translation?.diameter,
        size: translation?.size,
        about: translation?.about,
        title: translation?.title,
        keywords: translation?.keywords,
        descriptionMeta: translation?.descriptionMeta,
      };
    });
    cache.set(lang, { at: Date.now(), data: newList });
    return NextResponse.json(newList, { status: 200, headers: cacheHeaders });
  } catch (error) {
    return NextResponse.json(
      {
        message: "На сервере произошла ошибка попробуйте позже",
      },
      { status: 500 }
    );
  }
}
