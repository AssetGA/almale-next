import { createHash, randomInt, timingSafeEqual } from "crypto";

const CODE_TTL_MS = 10 * 60 * 1000;
export const MAX_CODE_ATTEMPTS = 5;

export function createVerificationCode() {
  const code = String(randomInt(0, 1000000)).padStart(6, "0");
  return {
    code,
    hash: hashCode(code),
    expiresAt: new Date(Date.now() + CODE_TTL_MS),
  };
}

export function normalizeCode(value) {
  const digits = String(value ?? "").replace(/\D/g, "");
  if (digits.length < 1 || digits.length > 6) return "";
  return digits.padStart(6, "0");
}

function hashCode(code) {
  return createHash("sha256").update(code).digest("hex");
}

export function codesMatch(code, hash) {
  if (!code || !hash) return false;
  const next = Buffer.from(hashCode(code));
  const prev = Buffer.from(String(hash));
  if (next.length !== prev.length) return false;
  return timingSafeEqual(next, prev);
}
