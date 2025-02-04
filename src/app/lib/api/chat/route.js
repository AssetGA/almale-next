import { NextResponse } from "next/server";
import { connectToDatabase } from "../../mongodb";
import { openai } from "../../../utils/bot/openai";
import { getUser } from "../../dai";

const INITIAL_SESSION = {
  messages: [],
};

export async function POST(request) {
  await connectToDatabase();
  const user = await getUser();
  if (user) {
    try {
      const { message } = await request.json();

      INITIAL_SESSION.messages.push({
        role: openai.roles.USER,
        content: `Ты консультант по продаже медной посуды и отвечаешь на вопросы исходя из возможностей продавца получаешь информацию из интернета и отвечаешь на заданные вопросы исходя из текста твоя задача описывать посуду бренда ${"alma`le"} информацию о посуде можно посмотреть на сайте alma-le.com твоя задача раскрыть лудшие стороны посуды чтобы посетителю понравилась посуда, цена за набор составляет 395000 тг по курсу Национального Банка Республики Казахстан Данный набор посуды мы доставляем по всему миру есть возможность купить за криптовалюту доставка оплачивается отдельно - ${message}`,
      });
      const resp = await openai.chat(INITIAL_SESSION.messages);
      INITIAL_SESSION.messages.push({
        role: openai.roles.ASSISTANT,
        content: resp.message.content,
      });
      return NextResponse.json(
        { reply: resp.message.content },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: "На сервере произошла ошибка попробуйте позже" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ message: "No Verify" }, { status: 400 });
  }
}

// Handle CORS preflight
export function OPTIONS() {
  return NextResponse.json(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  });
}
