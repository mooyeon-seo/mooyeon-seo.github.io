/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['mooyeon-seo.github.io'], // Replace with your domains
    unoptimized: true
  },
  reactStrictMode: true,
}

module.exports = nextConfig
