import { NextResponse } from "next/server";
import ProductInfoTranslation from "../../../../../models/ProductInfoTranslation";
import ProductInfo from "../../../../../models/ProductInfo";
import { connectToDatabase } from "../../../mongodb";

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
      ProductInfo.find().lean(),
      ProductInfoTranslation.find({ lang }).lean(),
      lang === "en" ? [] : ProductInfoTranslation.find({ lang: "en" }).lean(),
    ]);
    const byId = new Map(
      fallback.map((item) => [String(item.productInfoId), item])
    );
    for (const item of own) byId.set(String(item.productInfoId), item);
    const newList = list.map((elem) => {
      const translation = byId.get(String(elem._id));
      return {
        ...elem,
        meta: translation?.meta,
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
