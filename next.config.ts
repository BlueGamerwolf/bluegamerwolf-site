import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.0.0.11"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.modrinth.com",
      },
      {
        protocol: "https",
        hostname: "media.forgecdn.net",
      },
    ],
  },
};

export default nextConfig;