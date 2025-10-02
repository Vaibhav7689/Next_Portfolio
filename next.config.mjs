/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: isGithubPages ? '/portfolio-nextjs' : '/',
  basePath: isGithubPages ? '/portfolio-nextjs' : ''
}

export default nextConfig
