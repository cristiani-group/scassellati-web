import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.6"],
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "scassellati-web.vercel.app" }],
        destination: "https://scassellati.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
