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
        source: "/:path*", // Применяется ко всем путям
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOW-FROM http://example.com", // Разрешить загрузку только с указанного домена
          },
        ],
      },
    ];
  },
};

export default nextConfig;
