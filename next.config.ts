import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {

    unoptimized: true,
    domains: ["framerusercontent.com"],
  },
};

export default nextConfig;

