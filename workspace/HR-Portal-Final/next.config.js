/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  experimental: {
    // Enable Server Actions for modern Next.js 14 features
    serverActions: true,
  },
  // Azure Static Web Apps configuration
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for Azure SWA
  },
}

module.exports = nextConfig
