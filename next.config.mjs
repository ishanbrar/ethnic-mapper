/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Allow importing .geojson files as JSON modules for static map data
    config.module.rules.push({
      test: /\.geojson$/i,
      type: 'json'
    });
    return config;
  }
};

export default nextConfig;


