/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  productionBrowserSourceMaps: false, // убирает eval из source maps
  webpack: (config, { dev }) => {
    if (!dev) {
      config.devtool = false; // убирает eval в продакшене
    }
    return config;
  },
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
