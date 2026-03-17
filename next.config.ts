import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Run linting separately; prevents ESLint 9 flat-config compat issues on Vercel
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
