// app/api/product/route.js
import { NextResponse } from "next/server";
import { sendMessage } from "../../../utils/telegraf";
import { connectToDatabase } from "../../mongodb";

export async function GET(request) {
  await connectToDatabase();
  try {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    };
    // Обрабатываем запрос OPTIONS для CORS preflight
    if (request.method === "OPTIONS") {
      return NextResponse.json(null, { status: 200, headers });
    }

    // Получаем query-параметры
    const { searchParams } = new URL(request.url);

    const name = searchParams.get("name");
    const phone = searchParams.get("phone");
    const email = searchParams.get("email");
    const message = searchParams.get("message");

    // Логика обработки
    const getInfo = await sendMessage(
      `Имя заказчика: ${name}, почта: ${email}, номер телефона: https://wa.me/${phone}, сообщение: ${message}`
    );

    return NextResponse.json({ message: getInfo }, { status: 200, headers });
  } catch (e) {
    return NextResponse.json(
      {
        message: "На сервере произошла ошибка попробуйте позже",
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const origin = request.headers.get("origin");

  if (origin !== process.env.NEXT_PUBLIC_SITE_URL) {
    return new NextResponse("Access Denied", { status: 403 });
  }
  const { name, contact, message, type } = await request.json();
  try {
    const headers = {
      "Access-Control-Allow-Origin": `${process.env.NEXT_PUBLIC_SITE_URL}`,
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    };
    // Обрабатываем запрос OPTIONS для CORS preflight
    if (request.method === "OPTIONS") {
      return NextResponse.json(null, { status: 200, headers });
    }

    // Логика обработки
    const getInfo = await sendMessage(
      `Имя ${
        type === "moroz" ? "Дед мороза" : "Волшебника"
      }: ${name}, контакт по: ${contact}  сообщение: ${message}`
    );

    return NextResponse.json({ message: getInfo }, { status: 200, headers });
  } catch (e) {
    return NextResponse.json(
      {
        message: "На сервере произошла ошибка попробуйте позже",
      },
      { status: 500 }
    );
  }
}
