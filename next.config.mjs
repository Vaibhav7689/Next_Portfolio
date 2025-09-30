/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix:  '/Next_Portfolio/',
  basePath: '/Next_Portfolio'
}

export default nextConfig
