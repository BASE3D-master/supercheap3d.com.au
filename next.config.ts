import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ChatGPT Sites keeps its Vinext worker build. AWS Amplify uses the
  // dedicated static-export script and serves the generated `out` directory.
  output: process.env.AWS_AMPLIFY === "true" ? "export" : undefined,
  trailingSlash: process.env.AWS_AMPLIFY === "true",
  images: { unoptimized: true },
};

export default nextConfig;
