const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.alma-le.com";

const aiAgents = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "Google-Extended",
  "GoogleOther",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-User",
  "anthropic-ai",
  "Applebot-Extended",
  "Bingbot",
  "Amazonbot",
  "Bytespider",
  "CCBot",
  "Meta-ExternalAgent",
  "FacebookBot",
  "cohere-ai",
];

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/private/", "/admin/", "/login", "/signup", "/basket", "/payment"],
      },
      {
        userAgent: aiAgents,
        allow: ["/"],
        disallow: ["/private/", "/admin/", "/login", "/signup", "/basket", "/payment"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/img/", "/video/", "/kz/", "/ru/", "/en/", "/llms.txt"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/img/", "/video/", "/kz/gallery/", "/ru/gallery/", "/en/gallery/"],
      },
      {
        userAgent: "Googlebot-Video",
        allow: ["/video/", "/ru/gallery/", "/en/gallery/", "/kz/gallery/"],
      },
    ],
    sitemap: [`${siteUrl}/sitemap.xml`, `${siteUrl}/video-sitemap.xml`],
    host: "www.alma-le.com",
  };
}
