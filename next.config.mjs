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
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOW-FROM http://alma-le.com",
          },
        ],
      },
      {
        source: "/img/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=2592000",
          },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
