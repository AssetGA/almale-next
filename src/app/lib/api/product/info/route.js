// app/api/product/route.js
import { NextResponse } from "next/server";
import ProductInfoTranslation from "../../../../../models/ProductInfoTranslation";
import ProductInfo from "../../../../../models/ProductInfo";
import { connectToDatabase } from "../../../mongodb";

export async function GET(request) {
  await connectToDatabase();
  const url = new URL(request.url); // Создаем объект URL
  const lang = url.searchParams.get("lang");

  try {
    const list = await ProductInfo.find();
    const newList = await Promise.all(
      list.map(async (elem) => {
        const translation = await ProductInfoTranslation.findOne({
          productInfoId: elem._id,
          lang: lang,
        });
        const localizedProduct = {
          ...elem._doc,
          meta: translation?.meta,
        };
        return localizedProduct;
      })
    );
    return NextResponse.json(newList, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "На сервере произошла ошибка попробуйте позже",
      },
      { status: 500 }
    );
  }
}
