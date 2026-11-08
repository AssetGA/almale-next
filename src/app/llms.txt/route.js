import { llmFactsText } from "../lib/ai-facts";

export function GET() {
  return new Response(llmFactsText(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
