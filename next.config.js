/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Ensures server mode on Vercel
};

module.exports = nextConfig;