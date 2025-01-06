import "server-only";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(encodedKey);
}

export async function decrypt(session) {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}

// export async function fetchCreateSession(id) {
//   try {
//     const url = new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/lib/api/session`);
//     url.searchParams.append("id", id); // Добавляем параметр lang
//     const res = await fetch(url.toString(), {
//       method: "POST", // Указываем метод POST
//       headers: {
//         "Content-Type": "application/json", // Устанавливаем заголовок
//       },
//       body: JSON.stringify({ id }), // Передаём данные в теле запроса
//     });

//     if (!res.ok) throw new Error("Ошибка при загрузке товаров");
//     const session = await res.json();
//     return session;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return []; // Возвращаем пустой массив, если произошла ошибка
//   }
// }

export async function createSession(id) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  // 2. Encrypt the session ID

  const session = await encrypt({
    userId: id,
    expiresAt: expiresAt,
    role: "user",
  });

  // 3. Store the session in cookies for optimistic auth checks
  const cookieStore = await cookies();
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function updateSession() {
  const session = (await cookies()).get("session")?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export function getSessionCookie() {
  return cookies().get("session");
}

export async function deleteSession() {
  const cookieStore = await cookies();

  cookieStore.delete("session");
}
