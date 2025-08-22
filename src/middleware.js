import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "./app/lib/session";

const protectedRoutes = ["/basket", "/payment"];
const publicRoutes = ["/product", "/login", "/signup", "/"];

const locales = ["kz", "en", "ru"];
const defaultLocale = "kz";

function getLocale() {
  return defaultLocale;
}

export default async function middleware(request) {
  const { pathname } = request.nextUrl;

  // --- Исключения (не трогаем статику и sitemap) ---
  if (
    pathname === "/sitemap.xml" ||
    pathname === "/sitemap-index.xml" ||
    pathname === "/image-sitemap.xml" ||
    pathname === "/sitemap-0.xml" ||
    pathname === "/robots.txt" ||
    pathname === "/favicon.ico" ||
    pathname.startsWith("/video") ||
    pathname.startsWith("/videos") ||
    pathname.startsWith("/img") ||
    pathname.startsWith("/fonts") ||
    pathname.startsWith("/dictionaries") ||
    pathname.startsWith("/lib/api") ||
    pathname.endsWith(".woff2") ||
    pathname.endsWith(".ttf") ||
    pathname.endsWith(".css")
  ) {
    return NextResponse.next();
  }

  // --- Проверка на наличие locale в URL ---
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  const locale = getLocale();

  if (!pathnameHasLocale) {
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.nextUrl)
    );
  }

  const currentLocale =
    locales.find((locale) => pathname.startsWith(`/${locale}`)) ||
    defaultLocale;

  // --- Достаём session ---
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(`/${currentLocale}${route}`)
  );
  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(`/${currentLocale}${route}`)
  );

  // --- Если маршрут защищённый и нет сессии -> редирект на login ---
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(
      new URL(`/${currentLocale}/login`, request.nextUrl)
    );
  }

  // --- Если маршрут публичный, но пользователь авторизован -> редирект на product ---
  if (isPublicRoute && session?.userId) {
    return NextResponse.redirect(
      new URL(`/${currentLocale}/product`, request.nextUrl)
    );
  }

  // --- Ответ ---
  const response = NextResponse.next();
  response.headers.set("x-lang", currentLocale);
  response.headers.set("x-url", request.url);

  // кука-токен (пример)
  response.headers.set(
    "Set-Cookie",
    "user_token=xyz456; Secure; HttpOnly; SameSite=None; Path=/"
  );

  return response;
}

export const config = {
  matcher: [
    "/((?!_next).*)",
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
  ],
};
