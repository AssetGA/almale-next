// app/api/product/route.js
import { NextResponse } from "next/server";
import User from "../../../../../models/User";
import { getUser } from "../../../dai";

export async function GET(request) {
  try {
    const user = await getUser();
    console.log("user", user);
    const api = process.env.PAYMENT_URL;
    const findUser = await User.findById(user._id);
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
