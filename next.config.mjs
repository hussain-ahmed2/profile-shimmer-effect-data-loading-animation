/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "customcar.s3.amazonaws.com",
      },
      {
        hostname: "images.dealersync.com",
      },
    ],
  },
};

export default nextConfig;
