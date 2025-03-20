import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
}

if (process.env.NODE_ENV === 'development') {
  nextConfig.rewrites = async () => {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
      },
    ]
  }
}

export default nextConfig
