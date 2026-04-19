/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zonkacatering.com",
        pathname: "/wp-content/**",
      },
    ],
  },
};

module.exports = nextConfig;
