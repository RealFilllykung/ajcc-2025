import type { NextConfig } from "next";

const repo = "ajcc-2025";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig: NextConfig = {
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: assetPrefix,
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
