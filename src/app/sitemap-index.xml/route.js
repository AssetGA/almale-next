import { siteOrigin } from "../lib/locales";

export function GET() {
  const origin = siteOrigin();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${origin}/sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${origin}/video-sitemap.xml</loc>
  </sitemap>
</sitemapindex>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
