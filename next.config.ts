/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["pdf2pic"],
  experimental: {
    serverActions: {
      bodySizeLimit: "100mb",
    },
  },
};

module.exports = nextConfig;
