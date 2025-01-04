import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "./app/lib/session";

// 1. Specify protected and public routes
const protectedRoutes = ["/basket", "/payment"];
const publicRoutes = ["/product", "/login", "/signup", "/"];

let locales = ["kz", "en", "ru"];
let defaultLocale = "kz";

// Get the preferred locale, similar to the above or using a library
function getLocale() {
  return defaultLocale;
}

export default async function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  if (
    pathname === "/sitemap.xml" ||
    pathname === "/sitemap-0.xml" ||
    pathname === "/robots.txt" ||
    pathname.startsWith("/img") ||
    pathname === "/favicon.ico" ||
    pathname.startsWith("/fonts") ||
    pathname.startsWith("/dictionaries") ||
    pathname.endsWith(".woff2") ||
    pathname.endsWith(".ttf") ||
    pathname.startsWith("/lib/api") ||
    pathname.endsWith(".css")
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // 3. Decrypt the session from the cookie
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);
  // Redirect if there is no locale
  const locale = getLocale();

  // 4. Redirect if there is no locale in the path
  if (!pathnameHasLocale) {
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.nextUrl)
    );
  }

  const currentLocale = locales.find(
    (locale) =>
      pathname.startsWith(`/${locale}`) || pathname.startsWith(`/${locale}/`)
  );

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(`/${currentLocale}${route}`)
  );
  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(`/${currentLocale}${route}`)
  );

  // request.nextUrl.pathname = `/${locale}${pathname}`;
  // 5. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(
      new URL(`/${currentLocale}/login`, request.nextUrl)
    );
  }
  // 4. Redirect if there is no locale in the path
  // if (!pathnameHasLocale) {
  //   return NextResponse.redirect(
  //     new URL(`/${locale}${pathname}`, request.nextUrl)
  //   );
  // }
  // e.g. incoming request is /products
  // The new URL is now /en-US/products

  if (
    isPublicRoute &&
    session?.userId &&
    !session?.userId &&
    !request.nextUrl.pathname.startsWith(`/${currentLocale}/product`)
  ) {
    return NextResponse.redirect(
      new URL(`/${currentLocale}/product`, request.nextUrl)
    );
  }

  const response = NextResponse.next();
  response.headers.set("x-lang", currentLocale);
  return response;
}

export const config = {
  matcher: [
    "/((?!_next).*)",
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
  ],
};
