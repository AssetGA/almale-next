export function GET() {
  const file = process.env.APPLE_PAY_DOMAIN_ASSOCIATION;
  if (!file) {
    return new Response("Not found", { status: 404 });
  }
  return new Response(file, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
