// app/api/product/route.js
import { NextResponse } from "next/server";
import Video from "../../../../models/Video";
import { connectToDatabase } from "../../mongodb";
import VideoTranslation from "../../../../models/VideoTranslation";

export async function GET(request) {
  await connectToDatabase();

  const url = new URL(request.url); // Получаем URL
  const lang = url.searchParams.get("lang");

  try {
    const list = await Video.find();
    const newList = await Promise.all(
      list.map(async (elem, index) => {
        const translation = await VideoTranslation.findOne({
          videoId: index,
          language: lang,
        });
        const localizedProduct = {
          ...elem._doc,
          description: translation?.description,
          title: translation?.title,
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
