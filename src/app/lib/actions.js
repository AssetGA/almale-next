"use server";

import { verifySession } from "./dai";

export async function ServerAction() {
  const session = await verifySession();
  const userRole = session.user.role;

  // Return early if user is not authorized to perform the action
  if (userRole !== "admin") {
    return null;
  }
  if (userRole === "user") {
    return session.user.userId;
  }

  // Proceed with the action for authorized users
}
