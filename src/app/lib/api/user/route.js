"use server";

import { NextResponse } from "next/server";
import { getUser } from "../../dai";

export async function GET(request) {
  try {
    const user = await getUser();
    return NextResponse.json(user, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      {
        message: "На сервере произошла ошибка попробуйте позже",
      },
      { status: 500 }
    );
  }
}
