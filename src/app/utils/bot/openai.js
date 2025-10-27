import { createReadStream, existsSync } from "fs";
import OpenAI from "openai";

class OpenAID {
  roles = {
    ASSISTANT: "assistant",
    USER: "user",
    SYSTEM: "system",
  };
  constructor() {
    this.openai = new OpenAI(
      {
        apiKey: process.env.OPENAI_API_KEY,
      },
      {
        timeout: 120000, // Увеличение таймаута до 2 минут
      }
    );
  }
  async chat(messages) {
    try {
      const completion = await this.openai.chat.completions.create({
        messages: messages,
        model: "gpt-4o-mini",
        temperature: 0.9,
        store: true,
      });
      const reply =
        completion.choices?.[0]?.message?.content ??
        "Извините, не получил ответ от модели.";

      return reply;
    } catch (error) {
      console.log("Error while chat", error.message);
    }
  }
  async transcription(filepath) {
    try {
      // Проверка существования файла
      if (!existsSync(filepath)) {
        throw new Error(`File not found: ${filepath}`);
      }
      const fileStream = createReadStream(filepath);

      const response = await this.openai.audio.transcriptions.create({
        file: fileStream,
        model: "whisper-1",
      });

      return response.text;
    } catch (e) {
      console.error("Error during transcription:", e.message);
      console.error("Статус ошибки:", e.status);
      console.error("Full error:", e);
      throw new Error(
        "Transcription failed. Please check the logs for more details."
      );
    }
  }
}

export const openai = new OpenAID();
