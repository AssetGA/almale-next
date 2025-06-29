// app/api/product/route.js
import { NextResponse } from "next/server";
import Video from "../../../../models/Video";
import { connectToDatabase } from "../../mongodb";

export async function GET(request) {
  await connectToDatabase();

  const url = new URL(request.url); // Получаем URL
  //   const lang = url.searchParams.get("lang");

  try {
    const list = await Video.find();
    const newList = await Promise.all(
      list.map(async (elem) => {
        // const translation = await ProductTranslation.findOne({
        //   product: elem._id,
        //   language: lang,
        // });

        // const localizedProduct = {
        //   ...elem._doc,
        //   name: translation?.name,
        //   description: translation?.description,
        //   diameter: translation?.diameter,
        //   size: translation?.size,
        //   about: translation?.about,
        //   title: translation?.title,
        //   keywords: translation?.keywords,
        //   descriptionMeta: translation?.descriptionMeta,
        // };
        return elem;
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
