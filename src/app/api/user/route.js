// app/api/product/route.js
import { NextResponse } from "next/server";
import { connectToDataBase } from "../../lib/mongodb";
import User from "../../models/User";

export async function GET(request) {
  await connectToDataBase();
  try {
    const list = await User.find();
    const newList = list.map((elem) => {
      return { _id: elem._id };
    });
    return NextResponse.json(newList, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      {
        message: "На сервере произошла ошибка попробуйте позже",
      },
      { status: 500 }
    );
  }
}
