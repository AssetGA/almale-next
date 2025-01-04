/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chef.ru",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Set-Cookie", value: "HttpOnly; Secure; SameSite=Lax" },
        ],
      },
    ];
  },
};

export default nextConfig;
