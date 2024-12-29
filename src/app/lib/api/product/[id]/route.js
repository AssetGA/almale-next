// // app/api/product/[id]/route.js
// import { NextResponse } from "next/server";
// import { connectToDatabase } from "../../../../mongodb";

// export async function GET(request) {
//   await connectToDatabase();
//   try {
//     console.log("request", request);
//     // const newLang = request.url.slice(-2);
//     // const list = await Product.findOne({_id: });
//     // const newList = await Promise.all(
//     //   list.map(async (elem) => {
//     //     const translation = await ProductTranslation.findOne({
//     //       product: elem._id,
//     //       language: newLang,
//     //     });
//     //     const localizedProduct = {
//     //       ...elem._doc,
//     //       name: translation?.name,
//     //       description: translation?.description,
//     //       diameter: translation?.diameter,
//     //     };
//     //     return localizedProduct;
//     //   })
//     // );
//     // return NextResponse.json(newList, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       {
//         message: "На сервере произошла ошибка попробуйте позже",
//       },
//       { status: 500 }
//     );
//   }
// }
