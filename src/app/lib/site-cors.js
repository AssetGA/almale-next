import { siteOrigin } from "./locales";

export function siteCorsHeaders() {
  return {
    "Access-Control-Allow-Origin": siteOrigin(),
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    Vary: "Origin",
  };
}

export function originAllowed(request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  return origin === siteOrigin();
}
