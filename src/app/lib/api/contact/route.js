// app/api/product/route.js
import { NextResponse } from "next/server";
import { sendMessage } from "../../../utils/telegraf";
import { connectToDatabase } from "../../mongodb";
import { originAllowed, siteCorsHeaders } from "../../site-cors";
import { clientIpFromHeaders, rateLimit } from "../../rate-limit";

export async function GET(request) {
  await connectToDatabase();
  try {
    if (!originAllowed(request)) {
      return new NextResponse("Access Denied", { status: 403 });
    }
    const ip = clientIpFromHeaders(request.headers);
    if (!rateLimit(`contact:${ip}`, { limit: 8, windowMs: 15 * 60 * 1000 }).ok) {
      return NextResponse.json({ message: "too many requests" }, { status: 429 });
    }
    const headers = siteCorsHeaders();
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

    // Проверка на отсутствие данных
    const missingFields = [];
    if (!name) missingFields.push("name");
    if (!phone) missingFields.push("phone");
    if (!email) missingFields.push("email");
    if (!message) missingFields.push("message");

    if (missingFields.length > 0) {
      return NextResponse(
        JSON.stringify({
          success: false,
          error: `Отсутствуют обязательные поля: ${missingFields.join(", ")}`,
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

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
  if (!originAllowed(request)) {
    return new NextResponse("Access Denied", { status: 403 });
  }
  const ip = clientIpFromHeaders(request.headers);
  if (!rateLimit(`contact:${ip}`, { limit: 8, windowMs: 15 * 60 * 1000 }).ok) {
    return NextResponse.json({ message: "too many requests" }, { status: 429 });
  }
  const { name, contact, message, type } = await request.json();
  try {
    const headers = siteCorsHeaders();
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
