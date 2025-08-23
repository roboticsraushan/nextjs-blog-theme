/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable development features
  reactStrictMode: false,
  // Disable webpack dev tools
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.devtool = false;
    }
    return config;
  },
  // Disable source maps
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
