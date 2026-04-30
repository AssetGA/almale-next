"use server";

import { NextResponse } from "next/server";
import Session from "../../../../models/Session.js";
import { connectToDatabase } from "../../mongodb";
import { getUser } from "../../dai.js";

export async function POST(request) {
  await connectToDatabase();
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  try {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    // 1. Create a session in the database
    const sessionFind = await Session.findOne({ userId: id });
    if (sessionFind) {
      await sessionFind.deleteOne();
    }

    const data = await Session.create({
      userId: id,
      expiresAt,
      role: "user",
    });
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      {
        message: "На сервере произошла ошибка попробуйте позже",
      },
      { status: 500 }
    );
  }
}
