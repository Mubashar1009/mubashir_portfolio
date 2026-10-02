import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // `output: "export"` has no server to run the default image loader on, so
    // Image Optimization is off and every <Image> is served exactly as it sits
    // in /public. Set globally rather than per-image: the project art is SVG
    // today (which Next declines to optimize anyway), but the point of the
    // `image` field in content/cv.ts is that a real .png screenshot can drop
    // into its place, and that must not then break the export.
    unoptimized: true,
  },
};

export default nextConfig;
