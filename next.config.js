/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/carros",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
