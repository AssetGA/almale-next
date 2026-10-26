import { NextResponse } from "next/server";
import { openai } from "../../../utils/bot/openai";

// 🧠 Базовый контекст консультанта
const SYSTEM_PROMPT = `
Ты — профессиональный консультант по продаже медной посуды бренда **Alma'le**.  
Отвечай дружелюбно, красиво и уверенно, как будто разговариваешь с клиентом в магазине.  

Используй только достоверные факты с сайта [https://alma-le.com](https://alma-le.com) и информации о бренде в YouTube.  
Если не уверен в ответе — объясни, что уточнишь, но не выдумывай.

🔸 Твоя задача:
- Помогать покупателю выбрать посуду Alma'le, подчеркивая её преимущества и уникальность.
- Говорить убедительно, но без давления.
- Делать упор на **качество, долговечность, эстетику, пользу для здоровья**.
- Подчеркивать, что набор идеально подходит в подарок для мамы или жены.
- Упоминать, что **цена набора — 395 000 ₸** (по курсу Национального банка РК).
- Уточнять, что **доставка по всему миру**, возможна **оплата криптовалютой**, **доставка оплачивается отдельно**.
- При вопросе о рассрочке говорить, что можно оформить **в Каспи магазине Alma'le**.

💬 Пример ответов:
- “Эта медная кастрюля не только красивая, но и сохраняет вкус и аромат блюд. Она прослужит десятилетия.”
- “Да, конечно! Мы доставляем по всему миру — от Алматы до Парижа.”
- “Набор за 395 000 ₸ — идеальный подарок, особенно если вы хотите подчеркнуть заботу и внимание.”

📦 При ответе всегда помни: твоя цель — заинтересовать покупателя и вызвать желание купить или узнать больше.
`;

// 🗨️ Контекст диалога (хранится в памяти, можно заменить на Redis при желании)
const INITIAL_SESSION = {
  messages: [{ role: "system", content: SYSTEM_PROMPT }],
};

// 🔤 Маппинг языков
const LANGUAGE_LABELS = {
  kz: "Ответь на казахском языке, используя естественные и дружелюбные выражения.",
  ru: "Ответь на русском языке, дружелюбно и уверенно.",
  en: "Answer in English, warmly and professionally.",
  de: "Antworte auf Deutsch, freundlich und sachlich.",
  ar: "أجب باللغة العربية الفصحى، بلطف ووضوح.",
};

export async function POST(request) {
  try {
    const { message, lang, name, phone } = await request.json();
    console.log("lang", lang);
    if (!message || message.trim() === "") {
      return NextResponse.json(
        { message: "Пустое сообщение не может быть обработано." },
        { status: 400 }
      );
    }

    if (!lang || !["ru", "kz", "en", "de", "ar"].includes(lang)) {
      return NextResponse.json(
        { message: "Неверно указан язык (должен быть ru, kz, en, de или ar)." },
        { status: 400 }
      );
    }

    // 🗨️ Добавляем сообщение пользователя с инструкцией по языку
    INITIAL_SESSION.messages.push({
      role: "user",
      content: `${LANGUAGE_LABELS[lang]}\nСообщение: "${message}"`,
    });

    // Обрезаем историю — оставляем, например, 12 последних сообщений (включая system)
    if (INITIAL_SESSION.messages.length > 20) {
      // оставим system + последние 10
      const system = INITIAL_SESSION.messages[0];
      const tail = INITIAL_SESSION.messages.slice(-10);
      INITIAL_SESSION.messages = [system, ...tail];
    }

    // Отправляем запрос к OpenAI
    const completion = await openai.chat(INITIAL_SESSION.messages);
    console.log("0000", completion);
    INITIAL_SESSION.messages.push({
      role: openai.roles.ASSISTANT,
      content: completion,
    });

    return NextResponse.json({ reply: completion }, { status: 200 });
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
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  });
}
