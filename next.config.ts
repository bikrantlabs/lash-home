import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: process.env.NEXT_PUBLIC_LASH_URL!,
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
