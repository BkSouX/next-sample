/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: ["www.cleverconnect.com"],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
