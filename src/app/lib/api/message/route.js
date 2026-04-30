import { NextResponse } from "next/server";
import { openai } from "../../../utils/bot/openai";
import { getUser } from "../../dai";

const INITIAL_SESSION = {
  messages: [],
};

export async function POST(messages) {
  const user = await getUser();
  try {
    if (user) {
      INITIAL_SESSION.messages.push({
        role: openai.roles.USER,
        content: messages,
      });

      const response = await openai.chat(INITIAL_SESSION.messages);

      INITIAL_SESSION.messages.push({
        role: openai.roles.ASSISTANT,
        content: response.message.content,
      });
      return NextResponse.json(
        {
          content: {
            content: true,
            message: response.message.content,
          },
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ message: "No Verify" }, { status: 400 });
    }
  } catch (e) {
    console.log("Error main", e.message);
  }
}
