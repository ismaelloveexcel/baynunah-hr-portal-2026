/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  // Azure Static Web Apps configuration
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for Azure SWA
  },
}

module.exports = nextConfig
