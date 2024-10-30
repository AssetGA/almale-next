// app/api/product/route.js
import { NextResponse } from "next/server";
import { connectToDataBase } from "../../../../lib/mongodb";
import User from "../../../../models/User";

export async function GET(request) {
  await connectToDataBase();
  try {
    const { searchParams } = request.nextUrl;
    const id = searchParams.get("id"); // Получаем id из query-параметров
    const api = process.env.PAYMENT_URL;
    const findUser = await User.findById(id);
    if (findUser !== null) {
      return NextResponse.json(api, { status: 200 });
    } else {
      return NextResponse.json({ message: "Unauthorize" }, { status: 400 });
    }
  } catch (e) {
    return NextResponse.json(
      {
        message: "На сервере произошла ошибка попробуйте позже",
      },
      { status: 500 }
    );
  }
}
