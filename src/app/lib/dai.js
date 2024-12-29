import "server-only";

import { cookies } from "next/headers";
import { decrypt } from "./session";
import { cache } from "react";
import Users from "../../models/User";
import { redirect } from "next/navigation";
import { connectToDatabase } from "./mongodb";

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);
  // if (!session?.userId) {
  //   redirect(`/login`);
  // }

  return { isAuth: true, userId: session?.userId, role: session?.role };
});

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;
  await connectToDatabase();
  try {
    // Получение пользователя по userId из сессии
    const user = await Users.findById(session.userId); // lean() для повышения производительности, если вы просто читаете данные

    return user || null; // Вернуть `null`, если пользователь не найден
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return null;
  }
});
