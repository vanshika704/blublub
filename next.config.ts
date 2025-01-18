// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   domains: [
//     "aceternity.com", // Add your hostname here
//   ],
// };

// export default nextConfig;
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ["aceternity.com"], // Ensure the domain is inside the `images` object
  },
};

export default nextConfig;
