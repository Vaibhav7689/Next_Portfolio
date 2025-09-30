/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix:  '/portfolio-nextjs/',
  basePath: '/portfolio-nextjs'
}

export default nextConfig
