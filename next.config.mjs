/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "alma-le.com/en",
      },
      {
        protocol: "https",
        hostname: "alma-le.com/ru",
      },
      {
        protocol: "https",
        hostname: "alma-le.com/kz",
      },
    ],

    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*", // Применяется ко всем путям
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOW-FROM http://alma-le.com", // Разрешить загрузку только с указанного домена
          },
        ],
      },
    ];
  },
};

export default nextConfig;
