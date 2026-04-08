const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.join(__dirname, '../..'),
  },
  images: {
    unoptimized: process.env.SKIP_ENV_VALIDATION === 'true',
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  turbopack: {
    root: __dirname,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://swordstosilenced.com',
  },
  async rewrites() {
    return [{ source: '/status', destination: '/api/status' }];
  },
};

module.exports = nextConfig;
