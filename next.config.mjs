/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                 // generate static HTML
  images: { unoptimized: true },    // avoid next/image issues
  basePath: '/my-portfolio',           // replace with your repo name
  assetPrefix: '/my-portfolio/',       // same as repo name
}

export default nextConfig

