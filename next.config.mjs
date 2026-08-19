/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',

  basePath: '/resume',
  assetPrefix: '/resume/',
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig