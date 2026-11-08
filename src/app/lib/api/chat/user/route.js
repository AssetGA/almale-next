import { NextResponse } from "next/server";
import { sendMessage } from "../../../../utils/telegraf";
import { siteCorsHeaders } from "../../../site-cors";
import { clientIpFromHeaders, rateLimit } from "../../../rate-limit";

export async function POST(request) {
  const ip = clientIpFromHeaders(request.headers);
  if (!rateLimit(`chat-user:${ip}`, { limit: 10, windowMs: 15 * 60 * 1000 }).ok) {
    return NextResponse.json({ message: "too many requests" }, { status: 429 });
  }
  try {
    const { name, phone } = await request.json();
    if (!name || name.trim() === "") {
      return NextResponse.json(
        { message: "Пустое имя не может быть обработано." },
        { status: 400 }
      );
    }

    if (!phone || phone.trim() === "") {
      return NextResponse.json(
        { message: "Пустой номер не может быть обработан." },
        { status: 400 }
      );
    }

    // отправка для статистики
    const send = await sendMessage(
      `Имя заказчика: ${name}, номер телефона: ${phone}, фиксирую разговор с ботом`
    );

    console.log("send", send);
    return NextResponse.json({ reply: true }, { status: 200 });
  } catch (error) {
    console.error("Ошибка AI:", error);
    return NextResponse.json(
      { message: "Произошла ошибка при обработке запроса." },
      { status: 500 }
    );
  }
}

// Handle CORS preflight
export function OPTIONS() {
  return NextResponse.json(null, {
    status: 200,
    headers: siteCorsHeaders(),
  });
}
