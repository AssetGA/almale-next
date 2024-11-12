// app/api/product/[id]/route.js
import { NextResponse } from "next/server";
import { connectToDataBase } from "../../../../../lib/mongodb";
import Product from "../../../../../models/Product";
import ProductTranslation from "../../../../../models/ProductTranslate";

export async function GET(request) {
  await connectToDataBase();
  try {
    console.log("request", request);
    // const newLang = request.url.slice(-2);
    // const list = await Product.findOne({_id: });
    // const newList = await Promise.all(
    //   list.map(async (elem) => {
    //     const translation = await ProductTranslation.findOne({
    //       product: elem._id,
    //       language: newLang,
    //     });
    //     const localizedProduct = {
    //       ...elem._doc,
    //       name: translation?.name,
    //       description: translation?.description,
    //       diameter: translation?.diameter,
    //     };
    //     return localizedProduct;
    //   })
    // );
    // return NextResponse.json(newList, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "На сервере произошла ошибка попробуйте позже",
      },
      { status: 500 }
    );
  }
}
