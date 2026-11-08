const buckets = new Map();

export function rateLimit(key, { limit, windowMs }) {
  const now = Date.now();
  if (buckets.size > 5000) {
    for (const [name, bucket] of buckets) {
      if (bucket.reset <= now) buckets.delete(name);
    }
  }

  const bucket = buckets.get(key);
  if (!bucket || bucket.reset <= now) {
    buckets.set(key, { count: 1, reset: now + windowMs });
    return { ok: true };
  }

  bucket.count += 1;
  if (bucket.count > limit) {
    return { ok: false };
  }
  return { ok: true };
}

export function clientIpFromHeaders(headerStore) {
  const forwarded = headerStore.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim().slice(0, 64);
  return (headerStore.get("x-real-ip") || "local").slice(0, 64);
}
